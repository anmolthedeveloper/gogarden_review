"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Body() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const img = searchParams.get("img");

  return (
    // main body
    <div>
      {/* header section */}
      <div className=" bg-blue-400 h-full lg:px-28 lg:pt-12 px-10 pt-5">
        <div className="lg:ml-60 lg:mr-60">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-white lg:text-2xl text-xl">
              Please read the sms below
            </p>
          </div>
          {/* content section */}
          <div className="pt-10">
            <p className="text-white font-medium lg:text-lg text-justify">
              Dear Valued Customer <br />
              We extend our sincere appreciation for choosing Go Garden on
              Amazon for your recent purchase of --ProductName--. Your trust in
              our products is highly valued.
              <br />
              <br />
              To express our grattitude, we invite you to participate in an
              exclusive promotion. click on the following link:{" "}
              <a
                href={url!}
                className="text-blue-800 hover:text-xl hover:underline"
              >
                {url}
              </a>{" "}
              to avail a special offer and receive a cashback of 100 ruppes on
              your purchase.
              <br />
              <br />
              Your feedback is invaluable to us. We kindly request you to share
              your experience by providing a 5-star rating for the purchase of
              --ProductName--
              <br />
              <br />
              Cashback Redemption Process:
              <br />
              <br />
              Submit your review.
              <br />
              Take a screenshot of the review.
              <br />
              Forword the screenshot to us via WhatsApp at:{" "}
              <a
                href="https://wa.me/+919109307929"
                className="text-blue-800 hover:text-xl hover:underline"
              >
                9109307929.
              </a>
              <br />
              This step is crucial for claiming your cashback amount. We
              appreciate your cooperation and eagerly anticipate hearing about
              your positive ezperience.
              <br />
              <br />
              Thank you for choosing Go Garden on Amazon. Your satisfaction is
              our prioraty, and we value the trust you place in our products and
              services.
              <br />
              <br />
              Best regards.
            </p>
            <p className="text-white font-medium text-lg"></p>
          </div>
          {/* image section */}
          <div className="flex items-center justify-center mt-10 pb-10">
            <div className="relative w-[270px] h-[450px]">
              <Image src="./GoGarden.jpeg" alt="AmazonSS" layout="fill" />
            </div>
          </div>
          {img != null && (
            <div className="flex items-center justify-center mt-10 pb-10">
              <div className="relative w-[270px] h-[450px]">
                <img src={img!} alt="customImage" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
