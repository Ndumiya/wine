import Carousel from 'react-bootstrap/Carousel';
import '../components/Slider.css'
import Video from './Video';

const image = [
  'https://images.ctfassets.net/8x8155mjsjdj/1af9dvSFEPGCzaKvs8XQ5O/a7d4adc8f9573183394ef2853afeb0b6/Copy_of_Red_Wine_Blog_Post_Header.png',
  'https://ledecanter.com/wp-content/uploads/2022/07/11.jpeg',
  'https://i0.wp.com/yearinwine.com/wp-content/uploads/2022/03/ezy-watermark_02-03-2022_04-54-23pm-scaled.jpg?resize=1920%2C960'
]

function Slider() {

  const sliderImage = []

  for (let i = 0; i < image.length; i++) {

    sliderImage.push(
      <Carousel.Item key={i}>
        <img className="d-block" src={image[i]} alt="First slide" />
      </Carousel.Item>
    )

  }

  return (

    <Carousel >
      <Carousel.Item >
        <Video />
      </Carousel.Item>
      {

        sliderImage
      }
    </Carousel>
  );
}

export default Slider;
