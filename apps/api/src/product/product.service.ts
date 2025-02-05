import { NotFoundException } from '@nestjs/common/exceptions';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
      include: {
        product_item: true,
        HaveTag: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  async products(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    const { skip, take, orderBy, where } = params;
    return this.prisma.product.findMany({
      skip,
      take,
      orderBy,
      where,
      include: {
        product_item: true,
        HaveTag: {
          include: {
            tag: true,
          },
        },
        collection: true,
        discount: true,
      },
    });
  }
  async productsNotIncludeAnyRelation(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    const { skip, take, orderBy, where } = params;
    return this.prisma.product.findMany({
      skip,
      take,
      orderBy,
      where,
    });
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    console.log(data);
    return this.prisma.product.create({
      data: { ...data },
      include: {
        product_item: true,
        HaveTag: {
          include: {
            tag: true,
          },
        },
        collection: true,
        discount: true,
      },
    });
  }

  async updateProduct(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;
    console.log(data);
    return this.prisma.product.update({
      data,
      where,
      include: {
        product_item: true,
        HaveTag: {
          include: {
            tag: true,
          },
        },
        collection: true,
        discount: true,
      },
    });
  }

  async increaseProductView(productId: number): Promise<void> {
    try {
      // Fetch the product by its ID from the database
      const product = await this.prisma.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throw new NotFoundException('Product not found');
      }

      // Increment the views property by 1
      const updatedProduct = await this.prisma.product.update({
        where: { id: productId },
        data: {
          view: product.view + 1,
        },
      });

      console.log(
        `Product with ID ${productId} has been viewed ${updatedProduct.view} times.`,
      );
    } catch (error) {
      // Handle any potential errors
      throw new InternalServerErrorException(
        'Failed to update product view count.',
      );
    }
  }
}
