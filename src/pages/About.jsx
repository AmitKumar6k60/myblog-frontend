export default function About() {
  return (
    <div className='min-h-screen flex  justify-center  border-red-500'>
      <div className='max-w-2xl mx-auto p-3 text-center ' >
        <div className=" border-red-500 mt-24">
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Amit' Blog
          </h1>
          <div className='text-md text-justify text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to Amit's Blog—a place where ideas, insights, and inspiration come together. Here, you'll find a mix of articles, stories, and reflections on a variety of topics close to my heart. From technology and personal growth to creative musings and practical advice, my goal is to share meaningful content that resonates with readers.
            </p>

            <p>
            I created Amit's Blog as a space to document my journey, share what I learn along the way, and connect with people who share similar interests. Writing helps me dive deeper into the topics I’m passionate about, and through this blog, I hope to engage with a community of curious, like-minded readers.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
