
export interface IImageBasicMetadata {
  height: number | null;
  width: number | null;
  colorspace: string | null;
  format: string | null;
}

export class ImageBasicMetadata implements IImageBasicMetadata {
  public height: number | null = null;
  public width: number | null = null;
  public colorspace: string | null = null;
  public format: string | null = null;

  constructor(data: IImageBasicMetadata) {
    this.deserialize(data);
  }

  /**
   * @param data
   * @private
   */
  deserialize(data: IImageBasicMetadata) {
    this.height = data.height;
    this.width = data.width;
    this.colorspace = data.colorspace;
    this.format = data.format;
  }
}

