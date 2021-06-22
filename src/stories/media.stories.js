import React from 'react'
import { Media } from '../component/media/media'

export default {
  title: 'Content/Media',
  component: Media
}

const Template = (args) => <Media {...args} />
const TemplateWithText = () => (
  <>
    <Media
      caption="A long caption, ee mei labores adipiscing."
      image="https://picsum.photos/id/237/2000/1250"
      right="50"
      title="A picture of a black dog"
    />
    <p>Vitae elit finibus, in commodo nulla aliquam. Vivamus ac varius dolor. Praesent hendrerit erat nec pulvinar
      congue. </p>
    <p>Mauris in sagittis lacus. Aliquam nec consectetur elit, ac gravida mi. Donec ullamcorper felis volutpat
      venenatis maximus. Quisque facilisis leo at augue pulvinar, ac tincidunt urna egestas.</p>
    <p>Phasellus id sem molestie, facilisis ipsum id, molestie orci. Proin velit erat, luctus et mi eget, maximus
      aliquet dui. Integer nisl ipsum, malesuada ultrices ipsum a, scelerisque elementum risus. Donec erat urna,
      fringilla id ornare id, mattis non urna. Duis faucibus ante ac magna rutrum sagittis.</p>
  </>
);

export const Image = Template.bind({})
export const Video = Template.bind({})
export const ImageWithText = TemplateWithText.bind({})

Image.args = {
  title: 'A picture of a black dog',
  image: 'https://picsum.photos/id/237/2000/1250',
  caption: 'A long caption, ee mei labores adipiscing.'
}
Video.args = {
  title: 'Digital.nsw launch with Victor Dominello MP at NSW Parliament House',
  video: 'https://www.youtube.com/embed/HNHu2zRPSB4',
  caption: 'A long caption, ee mei labores adipiscing.',
  center: '80'
}
