import { StoryFn, Meta } from '@storybook/react/';
import MyImage, {  MyImageProps } from '.';
import testImage from '../../../assets/test-image.jpg'

export default {
  title: 'Atoms/MyImage',
  component: MyImage,
} as Meta;

const ImageTemplate: StoryFn<MyImageProps> = (args) => <MyImage {...args} />;

export const DefaultImage = ImageTemplate.bind({});
DefaultImage.args = {
  src: testImage,
  alt: 'Default Image',
  styles: { width: '500px', height: '500px',objectFit:"cover"},

};
