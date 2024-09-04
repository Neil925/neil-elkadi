export default function Contact() {
  return (
    <div className='space-y-10 text-lg lg:text-xl text-center'>
      <h2 className='text-3xl lg:text-4xl text-center '>Contact Me</h2>
      <div onClick={_ => navigator.clipboard.writeText("+1 (407) 364 - 5700")}>+1 (407) 364 - 5700</div>
      <div>
        <a className='dark:text-dPrimary text-primary underline' href="emailto:elkadineil@gmail.com">elkadineil@gmail.com</a>
      </div>
    </div>
  )
}

