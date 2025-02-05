import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import exp from 'constants';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get all products should have returned', () => {
    expect(service.products({})).toHaveReturned();
  });

  it('get product with {id: 1} should have returned', () => {
    expect(service.product({id: 1})).toMatchObject({id: 1});
  })

  // it('create product', () => {
  //   expect(service.createProduct({}))
  // })

});
