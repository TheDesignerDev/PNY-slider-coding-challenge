import './App.css';
import {useState} from 'react'
import img1 from './images/image-tanya.jpg'
import img2 from './images/image-john.jpg'
import leftArrow from './images/icon-prev.svg'
import rightArrow from './images/icon-next.svg'

const testimonials = [
  {
    image: img1, 
    text: '"Ive been interested in coding for a while but never taken the jump, until now. I couldnt recommend this course enough. Im now in the job of my dreams and so excited about the future."',
    author: 'Tanya Sinclair',
    role: 'UX Engineer'
  }, 
  {
    image: img2,
    text: '"Ive been interested in coding for a while but never taken the jump, until now. I couldnt recommend this course enough. Im now in the job of my dreams and so excited about the future."'
  }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * Forward testimonial index
   * if not possible go to first one
   */
  const goNext = () => {
    const nextIndex = currentIndex + 1;

    if(nextIndex >= testimonials.length) setCurrentIndex(0)
    else setCurrentIndex(nextIndex);
  }

  /**
   * Backtrack testimonial index
   * if not possible go to last one
   */
  const goPrev = () => {
    const prevIndex = currentIndex - 1;

    if(prevIndex < 0) setCurrentIndex(testimonials.length - 1)
    else setCurrentIndex(prevIndex)
  }

  const {image, text, author, role} = testimonials[currentIndex]

  return (
    <div className="App">
      <div className='left-bg'>
        <div className='bottom-left-bg' />
        <p>{text}</p>
        <p>{author} <span>{role}</span></p>
      </div>
      <div className='right-bg'>
        <div className='person-img'>
            <img src={image} />
            <div className='arrow-container'>
              <button onClick={goPrev}>
                <img src={leftArrow} />
              </button>
              <button onClick={goNext}>
                <img src={rightArrow} />
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
