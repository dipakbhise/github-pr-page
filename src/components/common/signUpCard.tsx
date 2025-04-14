import React from "react";

const SignupCard: React.FC = () => {
  return (
    <div className="w-full text-sm">
      <div
        className="border rounded-md p-4 text-gray-800 flex items-center"
        style={{
          backgroundColor: "#fff8c5",
          borderColor: "#d4a72c66",
        }}
      >
        <div className="">
        <button
            className="text-white py-[5px] px-4 rounded-sm text-sm font-medium"
            style={{ backgroundColor: "#1f883d" }}
          >
            Sign up for free
          </button> <strong>to join this conversation on GitHub.</strong> 
        </div>

          <div className="text-sm">
          {" "}Already have an account?{" "}
            <a href="#" className="font-medium border-b" style={{ color: "#0969da" }}>
              Sign in to comment
            </a>
          </div>
      </div>
    </div>
  );
};

export default SignupCard;
