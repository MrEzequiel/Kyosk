const btns = document.querySelectorAll('.acc-btn')

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle('is-open')

  // the acc-content
  const content = this.nextElementSibling

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null
  else content.style.maxHeight = content.scrollHeight + 'px'
}

// event
btns.forEach(el => el.addEventListener('click', accordion))

/* SCROLL REVEAL*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `header main,
  #about-us .image-about, #about-us text-about,
  #membership .image-member, #membership .text-member,
  #faqs .image-faq, #faqs .faq,
  #contact-us .copyright, #contact-us .terms
  `,
  { interval: 100 }
)
