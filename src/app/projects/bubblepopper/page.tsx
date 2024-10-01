import Link from 'next/link'
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <h1>Project 000</h1>
      <h3 className='mb-2'>Simple Bubble Popper</h3>
      <br/>
      <p>
        This was a little hello world of sorts for me to figure out how getting an app on the app stores worked.
        I whipped up a quick and simple game in Unity where the player would need to tap on small little
        bubbles to pop them and not let any touch the top of the screen.
      </p>
      <br />
      <p>
        Then it was on to getting it on the app store, which took a super long time due to all the amount of
        information I had to put in. But after that was completed, it was approved despite it being a quick
        and dirty throw together of a game and you can now find it here:
      </p>
      <br />
      <Link href='https://apps.apple.com/us/app/simple-bubble-popper/id6575347213'><div className='button m-2'><p className='text-center'>iOS</p></div></Link>
      <p className='mb-3'>Android comming soon</p>
      <Image src={'/images/bubblepopper/0.png'} style={{width: '100%', height: 'auto', zIndex: '10'}} width={0} height={0} sizes={'100vw'} alt={"image"}></Image>
    </div>
  )
}
