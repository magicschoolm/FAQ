import { useState } from 'react'
import './App.css'


  const FaqItems = ({q, ans}) => {
    const [show, setShow] = useState(false)
  
  const toggleShow = () => {
    setShow(!show)
  }
    return (
      <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={toggleShow} >{q}</div>
      <div className="faq-item-body">
      <div className="faq-item-body-content">{ans}
      </div>
      </div>
      </div>
    ) 
  }
  const FaqAccordion = ({data}) => {
  return (
    <div className="faq-accordion">
      <h2>FAQ</h2>
      {data.map((item) => (
      <FaqItems
        key={item.id}
        q={item.q}
        ans={item.ans}
  />
))}
    </div>
  )
}

const data = [
  {
    id: 1,
    q: "What is your company?",
    ans: "We are a company that provides products and services to help customers solve their everyday needs."
  },
  {
    id: 2,
    q: "What products do you offer?",
    ans: "We offer a range of high-quality products designed to meet different customer requirements."
  },
  {
    id: 3,
    q: "How can I contact customer support?",
    ans: "You can contact our customer support team through email, phone, or the contact form on our website."
  },
  {
    id: 4,
    q: "Do you offer refunds?",
    ans: "Yes, refunds are available according to our refund and return policy."
  },
  {
    id: 5,
    q: "How long does delivery take?",
    ans: "Delivery usually takes between 3 and 7 business days depending on your location."
  }
];

  function App() {
    return (
      <>
      <div className='App'>
        <FaqAccordion data ={data}/>
      </div>
      </>
    )
  }


export default App
