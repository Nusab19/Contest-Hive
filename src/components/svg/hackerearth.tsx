import { cn } from "@/lib/utils";

const defaultClassName =
  "mx-10 h-10 w-10 rounded-md p-2 dark:bg-primary md:mx-14 md:h-12 md:w-12";

const HackerearthLogo = (className: string = "") => {
  return (
    <div className={cn(defaultClassName, className)}>
      <svg
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.2178 0.501758H9.88847V8.36943H10.0274C11.2599 6.82581 12.7789 6.64228 14.4432 6.75745C16.901 6.89872 19.2979 8.34996 19.4586 12.9696V22.0922V22.0992C19.4563 22.1899 19.4177 22.2762 19.3508 22.3395C19.284 22.4029 19.1943 22.4382 19.101 22.4381H16.4667C16.3731 22.4386 16.2831 22.4033 16.2159 22.34C16.1487 22.2766 16.1098 22.1902 16.1074 22.0992V13.2451C16.1074 11.0909 15.3829 9.48137 13.1821 9.48137C11.5804 9.48137 9.88718 10.5585 9.88718 12.8275V22.0918V22.0988C9.88517 22.1896 9.84658 22.276 9.7797 22.3393C9.71282 22.4027 9.62301 22.438 9.52961 22.4377H6.89832C6.80491 22.438 6.7151 22.4027 6.64823 22.3393C6.58135 22.276 6.54275 22.1896 6.54074 22.0988V22.0918V0.501758H1.98391C1.48016 0.480405 0.988289 0.654271 0.616313 0.985174C0.244336 1.31608 0.0226718 1.77696 0 2.26661L0 27.6357C0.0184108 28.1356 0.23537 28.609 0.60531 28.9567C0.975249 29.3043 1.46938 29.499 1.98391 29.5H24.2174C24.4616 29.4955 24.7024 29.4432 24.9253 29.3463C25.1482 29.2493 25.3488 29.1096 25.5149 28.9356C25.681 28.7615 25.8094 28.5567 25.8922 28.3334C25.9751 28.1101 26.0108 27.8728 25.9972 27.6357V2.26661C26.0092 2.03475 25.9716 1.803 25.8869 1.58595C25.8022 1.36889 25.6722 1.17124 25.5051 1.00544C25.3379 0.83964 25.1372 0.709289 24.9157 0.622602C24.6942 0.535916 24.4565 0.494772 24.2178 0.501758ZM21.0534 25.7996H4.94338V24.2576H21.0534V25.7996Z"
          fill="#323754"
        />
      </svg>
    </div>
  );
};

export default HackerearthLogo;
