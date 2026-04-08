"use client";

import { useEffect } from "react";

interface LodgifyBookingWidgetProps {
  rentalId: number;
}

export default function LodgifyBookingWidget({ rentalId }: LodgifyBookingWidgetProps) {
  useEffect(() => {
    // Load the Lodgify script once
    const scriptId = "lodgify-bnb-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js";
      script.defer = true;
      document.body.appendChild(script);
    } else {
      // Script already loaded — re-render the widget
      const w = window as unknown as Record<string, () => void>;
      if (typeof w.renderBookNowBox === "function") w.renderBookNowBox();
    }
  }, [rentalId]);

  return (
    <div className="lodgify-widget-wrapper">
      <style>{`
        .lodgify-widget-wrapper {
          --ldg-bnb-background: #2a2520;
          --ldg-bnb-border-radius: 0.75em;
          --ldg-bnb-box-shadow: none;
          --ldg-bnb-padding: 14px;
          --ldg-bnb-input-background: #1a1714;
          --ldg-bnb-button-border-radius: 9999px;
          --ldg-bnb-color-primary: #C9A96E;
          --ldg-bnb-color-primary-lighter: #d4bb8a;
          --ldg-bnb-color-primary-darker: #a08550;
          --ldg-bnb-color-primary-contrast: #1a1714;
          --ldg-component-calendar-cell-selection-bg-color: #C9A96E;
          --ldg-component-calendar-cell-selection-color: #1a1714;
          --ldg-component-calendar-cell-selected-bg-color: #d4bb8a;
          --ldg-component-calendar-cell-selected-color: #1a1714;
          --ldg-bnb-font-family: inherit;
        }
        .lodgify-widget-wrapper #lodgify-book-now-box {
          width: 100%;
        }
      `}</style>
      <div
        id="lodgify-book-now-box"
        data-rental-id={rentalId}
        data-website-id="486498"
        data-slug="californialuxurystays"
        data-language-code="en"
        data-new-tab="false"
        data-version="stable"
        data-hide-minimum-price
        data-has-guests-breakdown
        data-check-in-label="Check-in"
        data-check-out-label="Check-out"
        data-guests-label="Guests"
        data-guests-singular-label="{{NumberOfGuests}} guest"
        data-guests-plural-label="{{NumberOfGuests}} guests"
        data-total-price-label="Total price:"
        data-select-dates-to-see-price-label="Select dates to see total price"
        data-book-button-label="Book Now"
        data-guests-breakdown-label="Guests"
        data-adults-label='{"one":"adult","other":"adults"}'
        data-adults-description="Ages {minAge} or above"
        data-children-label='{"one":"child","other":"children"}'
        data-children-description="Ages {minAge}-{maxAge}"
        data-children-not-allowed-label="Not suitable for children"
        data-infants-label='{"one":"infant","other":"infants"}'
        data-infants-description="Under {maxAge}"
        data-infants-not-allowed-label="Not suitable for infants"
        data-pets-label='{"one":"pet","other":"pets"}'
        data-pets-not-allowed-label="Not allowed"
        data-done-label="Done"
      />
    </div>
  );
}
