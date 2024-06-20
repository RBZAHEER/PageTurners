import React from "react";

function About() {
  return (
    <div className=" mt-18">
      <br />
      <br />
      <br />
      <div className="max-w-screen-2xl container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          About PageTurner
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg">
            Welcome to <strong className=" text-pink-500">PageTurner</strong>,
            your premier destination for all things books. We are an ecommerce
            company dedicated to bringing the joy of reading to people around
            the world. Whether you're looking for the latest bestseller, a
            classic novel, or a hidden gem, we have something for every book
            lover.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
          <p className="text-lg">
            Our mission is to connect readers with the books they love by
            providing a seamless and enjoyable online shopping experience. We
            aim to foster a community of book enthusiasts who can share their
            passion for reading and discover new literary treasures.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">History</h2>
          <p className="text-lg">
            <strong>PageTurner</strong> was founded in 2015 by a group of book
            enthusiasts who wanted to make it easier for people to find and
            purchase their favorite books online. What started as a small
            startup has grown into a thriving ecommerce platform, serving
            customers from all corners of the globe. Over the years, we have
            expanded our catalog, improved our website, and built strong
            relationships with publishers and authors to bring you the best
            selection of books available.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Values and Culture</h2>
          <p className="text-lg">
            At <strong>PageTurner</strong>, we believe in the power of books to
            inspire, educate, and entertain. Our core values include:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li className="text-lg">
              Customer Focus: We are dedicated to providing excellent service
              and a personalized shopping experience.
            </li>
            <li className="text-lg">
              Integrity: We operate with honesty and transparency in all our
              dealings.
            </li>
            <li className="text-lg">
              Innovation: We continuously seek new ways to enhance our platform
              and meet the evolving needs of our customers.
            </li>
            <li className="text-lg">
              Community: We foster a supportive and inclusive community of
              readers and book lovers.
            </li>
          </ul>
          <p className="text-lg mt-4">
            Our culture is built on a love for books and a commitment to
            delivering the best possible experience for our customers. We value
            creativity, collaboration, and a passion for continuous learning.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg">
            If you have any questions or need assistance, please don't hesitate
            to reach out to us:
          </p>
          <ul className="list-inside ml-4">
            <li className="text-lg">
              <strong>Customer Service:</strong> support@pageturner.com
            </li>
            <li className="text-lg">
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li className="text-lg">
              <strong>Address:</strong> 123 Booklover's Lane, Novel City,
              Fictionland, 98765
            </li>
            <li className="text-lg">
              <strong>Follow Us:</strong>
            </li>
            <ul className="list-disc list-inside ml-4">
              <li className="text-lg">
                <strong>Facebook:</strong> facebook.com/PageTurnerBooks
              </li>
              <li className="text-lg">
                <strong>Twitter:</strong> twitter.com/PageTurnerBooks
              </li>
              <li className="text-lg">
                <strong>Instagram:</strong> instagram.com/PageTurnerBooks
              </li>
            </ul>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
