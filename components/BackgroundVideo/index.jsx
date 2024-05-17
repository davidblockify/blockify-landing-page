import React from 'react'

export default function BackgroundVideo() {
  return (
    <div className="fixed  w-full h-screen bg-gradient-to-t from-[#071d10] to-green-[#071d10] bg-black bg-opacity-65 -z-10">
      <video
        autoPlay
        loop
        muted
        className="fixed object-cover right-0 bottom-0 min-w-[100%] min-h-[100%]  bg-black -z-20"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1371869084935057805/TEAM/8309/bed7/-e34c-45b1-9aab-0211a679430d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lTwa9hO3WAE1Uu0C5-VSogKV4h2hS6qwArOTqp0lS9uSysXYMeNGpq3rbd5qMobC5uO0tHdfHadhD9lBEd2lqre4Pb2H1AvBVxofacFlVRrH1GSUjnneJx8sQT4ly-D2F0veuOngqECYbHeNnyfo6BrFOE3J-eCh5ZNyflE-4JJ87UlG0dCXbd5No8vc1Xtt9M5r~LYbUxre46w8bCoq0YbZizt6KKpfP6x6q77Amune5gdgqueF76Sa74OsR~cA9NxuJw-DxKoKIHlLc0J6v~W40SIz0QkicCC3fN8lKknpVuSdyZQF3558qy~t6r9gBBMIzyflUFrGsYPTrkjK6Q__"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
