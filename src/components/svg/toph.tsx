import { cn } from "@/lib/utils";

const defaultClassName =
  "mx-10 h-10 w-10 rounded-md p-2 dark:bg-primary md:mx-14 md:h-12 md:w-12";

const TophLogo = (className: string = "") => {
  return (
    <div className={cn(defaultClassName, className)}>
      <svg
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5967 24.4373C11.009 23.2498 11.3942 22.0012 11.7528 20.6907C12.1112 19.3803 12.4431 18.0845 12.7487 16.803C13.054 15.5213 13.3287 14.2865 13.5733 13.0987C13.8175 11.9108 14.0285 10.8463 14.2062 9.905C14.3836 8.96383 14.5271 8.17783 14.6366 7.54683C14.7457 6.91616 14.8175 6.51433 14.8521 6.342C15.1577 6.46566 15.5313 6.62666 15.9727 6.82466C16.4141 7.02283 16.8601 7.22966 17.3114 7.44583C17.7621 7.66183 18.1827 7.871 18.5733 8.07266C18.9637 8.275 19.2679 8.445 19.4858 8.58366C19.3268 9.522 19.0835 10.5678 18.7559 11.7208C18.4278 12.8743 18.0527 14.0697 17.6299 15.3078C17.2072 16.5463 16.7566 17.7917 16.2782 19.044C15.7998 20.2967 15.3299 21.4867 14.8685 22.614C14.407 23.7415 13.9767 24.7703 13.5776 25.7008C13.1785 26.6312 12.8507 27.398 12.5947 28C12.3817 27.8897 12.1156 27.735 11.7967 27.5352C11.4778 27.3355 11.1519 27.1347 10.8197 26.9327C10.4874 26.7302 10.1801 26.5408 9.89735 26.3645L10.5967 24.4373Z"
          fill="#0099EF"
          fill-opacity="0.941176"
        />
        <path
          d="M7.25298 24.4373C7.66526 23.2498 8.05046 22.0012 8.40907 20.6907C8.76752 19.3803 9.09938 18.0845 9.405 16.803C9.71028 15.5213 9.98496 14.2865 10.2296 13.0987C10.4738 11.9108 10.6848 10.8463 10.8625 9.905C11.0399 8.96383 11.1834 8.17783 11.2929 7.54683C11.402 6.91616 11.4738 6.51433 11.5084 6.342C11.814 6.46566 12.1876 6.62666 12.629 6.82466C13.0704 7.02283 13.5164 7.22966 13.9677 7.44583C14.4184 7.66183 14.839 7.871 15.2296 8.07266C15.62 8.275 15.9242 8.445 16.1421 8.58366C15.9831 9.522 15.7398 10.5678 15.4121 11.7208C15.0841 12.8743 14.709 14.0697 14.2861 15.3078C13.8635 16.5463 13.4129 17.7917 12.9345 19.044C12.4561 20.2967 11.9862 21.4867 11.5247 22.614C11.0633 23.7415 10.633 24.7703 10.2339 25.7008C9.83483 26.6312 9.50698 27.398 9.25102 28C9.03803 27.8897 8.77187 27.735 8.45304 27.5352C8.13405 27.3355 7.80821 27.1347 7.47601 26.9327C7.14365 26.7302 6.83636 26.5408 6.55365 26.3645C6.27094 26.1877 6.0648 26.0617 5.93539 25.9863L7.25298 24.4373Z"
          fill="#3E454C"
        />
        <path
          d="M2.38286 9.2075C3.12098 10.2552 3.7486 11.298 4.26587 12.3348C4.78264 13.3718 5.21849 14.369 5.57309 15.3262C5.92753 16.2837 6.21174 17.1893 6.42574 18.0435C6.63957 18.898 6.80742 19.672 6.92863 20.3657C7.04332 21.0217 7.12541 21.6023 7.17507 22.1078C7.22472 22.6132 7.25331 23.037 7.2615 23.3782C7.28106 23.7862 7.27822 24.139 7.25297 24.4373L6.55364 26.3645C6.27093 26.1877 6.06479 26.0617 5.93538 25.9863C5.9404 25.868 5.95294 25.6623 5.973 25.3702C5.99273 25.0782 6.00025 24.7145 5.9954 24.2795C5.99022 23.8447 5.96381 23.3427 5.91599 22.773C5.86801 22.2037 5.78441 21.5765 5.66471 20.892C5.52845 20.1127 5.3377 19.2813 5.0931 18.398C4.84834 17.515 4.51264 16.6107 4.08631 15.6853C3.65982 14.76 3.11864 13.8252 2.46294 12.8805C1.8069 11.936 1.00541 11.007 0.0581414 10.093L0.0367414 10.082L0.00547791 10.014L2.38286 9.2075Z"
          fill="#E7ECF1"
        />
        <path
          d="M26.75 3.22967C26.1324 3.3165 25.5078 3.39967 24.8762 3.47917C24.2442 3.55883 23.5688 3.64583 22.8494 3.74033C22.1298 3.835 21.339 3.947 20.4772 4.07583C19.615 4.205 18.6452 4.36233 17.5672 4.54817C16.188 4.786 14.8578 5.04233 13.5759 5.31683C12.294 5.59183 11.0324 5.9095 9.79136 6.2705C8.55017 6.63133 7.31902 7.04917 6.09806 7.52417C4.8766 7.999 2.38286 9.2075 2.38286 9.2075L0.0581448 10.093C0.0454386 10.0953 0.0384168 10.0915 0.0367448 10.082C0.0225344 10.0748 0.0121685 10.052 0.0054813 10.014C-0.0110704 9.919 0.00982604 9.781 0.0686775 9.59933C0.127192 9.41783 0.21162 9.21717 0.321796 8.99733C0.431637 8.77783 0.554519 8.556 0.689605 8.33183C0.82469 8.10783 0.955095 7.9115 1.08065 7.74283C1.13332 7.675 1.41034 7.48783 1.91223 7.181C2.41346 6.87417 3.11179 6.49183 4.0069 6.034C4.90151 5.57633 5.97501 5.06817 7.2269 4.5095C8.47845 3.95083 9.87579 3.39417 11.4187 2.83933C12.9615 2.28483 14.6354 1.7585 16.4403 1.26133C18.2449 0.764333 20.144 0.343667 22.1372 0C22.238 0.0613333 22.4012 0.162833 22.6262 0.305167C22.8511 0.447833 23.1094 0.613667 23.4009 0.803167C23.6923 0.993 24.0028 1.19883 24.3322 1.42117C24.6615 1.6435 24.9808 1.86267 25.2896 2.07883C25.5988 2.295 25.8803 2.5035 26.1351 2.70417C26.3897 2.90517 26.5947 3.08017 26.75 3.22967Z"
          fill="#22313F"
        />
      </svg>
    </div>
  );
};

export default TophLogo;
