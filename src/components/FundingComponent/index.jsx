import React from "react";
import fundingData from "./fundingData.json";
import "../CollaboratorsComponent/collaborators.css";

const FundingComponent = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-sm text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 border text-center text-nowrap">Scheme</th>
              <th className="px-3 py-2 border text-center text-nowrap">Sponsor</th>
              <th className="px-3 py-2 border text-center text-nowrap">From</th>
              <th className="px-3 py-2 border text-center text-nowrap">To</th>
              <th className="px-3 py-2 border text-center text-nowrap">Amount</th>
            </tr>
          </thead>
          <tbody>
            {fundingData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                
                {/* SCHEME + DETAILS */}
                <td className="px-3 py-2 border text-center align-center">
                  <div
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: item.scheme }}
                  ></div>
                  {item.schemeDetails && (
                    <div
                        className="mt-1 leading-snug"
                        style={{
                        fontSize: "13px",
                        color: "#6c757d", // Tailwind's text-gray-400
                        }}
                        dangerouslySetInnerHTML={{ __html: item.schemeDetails }}
                    />)}
                </td>

                {/* SPONSOR */}
                <td className="px-3 py-2 border text-center align-center">
                  <div
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: item.sponsor }}
                  ></div>
                  {item.sponsorDetails && (
                    <div
                        className="mt-1 leading-snug"
                        style={{
                        fontSize: "13px",
                        color: "#6c757d", // Tailwind's text-gray-400
                        }}
                        dangerouslySetInnerHTML={{ __html: item.sponsorDetails }}
                    />)}
                </td>

                {/* From */}
                <td className="px-3 py-2 border text-center align-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="talkDate newsDateContainer">
                      <div className="badge dateColor p-1 newsDate">
                        {item.from}
                      </div>
                    </div>
                  </div>
                </td>
                
                {/* To */}
                <td className="px-3 py-2 border text-center align-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="talkDate newsDateContainer">
                      <div className="badge dateColor p-1 newsDate">
                        {item.to}
                      </div>
                    </div>
                  </div>
                </td>

                {/* AMOUNT */}
                <td className="px-3 py-2 border text-center align-center whitespace-nowrap">
                  ₹ {item.amount}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundingComponent;
