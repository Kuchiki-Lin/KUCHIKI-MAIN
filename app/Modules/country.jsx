"use client";

import React, { useState, useEffect } from "react";
import { Select } from "antd";
import countriesList from "@/app/Modules/countries";
import { useSurveyContext } from "@/app/survpages/survcont.jsx"; // ✅ import context

const { Option } = Select;

export default function CountryStateSelector() {
  const { surveyData, setSurveyData } = useSurveyContext(); // ✅ use global context
  const [selectedCountry, setSelectedCountry] = useState(surveyData.country || null);
  const [selectedState, setSelectedState] = useState(surveyData.state || null);

  const handleCountryChange = (countryName) => {
    setSelectedCountry(countryName);
    setSelectedState(null);

    // ✅ update surveyData immediately
    setSurveyData((prev) => ({
      ...prev,
      country: countryName,
      state: null,
    }));
  };

  const handleStateChange = (stateName) => {
    setSelectedState(stateName);

    // ✅ update surveyData with selected state
    setSurveyData((prev) => ({
      ...prev,
      state: stateName,
    }));
  };

  const states =
    countriesList.find((c) => c.name === selectedCountry)?.states || [];

  // Keep local and global data in sync if user navigates back
  useEffect(() => {
    if (surveyData.country) setSelectedCountry(surveyData.country);
    if (surveyData.state) setSelectedState(surveyData.state);
  }, [surveyData.country, surveyData.state]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* COUNTRY DROPDOWN */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Select Country
        </label>
        <Select
          showSearch
          placeholder="Choose a country"
          optionFilterProp="children"
          onChange={handleCountryChange}
          value={selectedCountry}
          className="w-full"
          filterOption={(input, option) =>
            option?.children
              ?.toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          {countriesList.map((country) => (
            <Option key={country.iso2} value={country.name}>
              {country.name}
            </Option>
          ))}
        </Select>
      </div>

      {/* STATE DROPDOWN */}
      {selectedCountry && (
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Select State / Province
          </label>
          <Select
            showSearch
            placeholder={
              states.length > 0
                ? "Choose a state"
                : "No states available for this country"
            }
            optionFilterProp="children"
            onChange={handleStateChange}
            value={selectedState}
            className="w-full"
            disabled={states.length === 0}
            filterOption={(input, option) =>
              option?.children
                ?.toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {states.map((state) => (
              <Option key={state.iso2} value={state.name}>
                {state.name}
              </Option>
            ))}
          </Select>
        </div>
      )}

      {/* Display summary */}
      {selectedCountry && (
        <p className="text-gray-600 mt-2 text-sm">
          🌍 <b>{selectedCountry}</b>
          {selectedState && (
            <>
              {" — "}🏙️ <b>{selectedState}</b>
            </>
          )}
        </p>
      )}
    </div>
  );
}
