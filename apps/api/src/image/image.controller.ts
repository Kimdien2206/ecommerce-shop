import { Controller, Post, Body, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() newImage: Express.Multer.File) {
    console.log(newImage)
    return this.imageService.uploadImage(newImage);
  }
}
