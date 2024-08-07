"use client";
import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContestsTable from "@/components/ContestsTable";
import CompressedContestTable from "@/components/CompressedContestTable";
import NoSSR from "@/components/NoSSR";
import type { ContestType } from "@/lib/types";

const FocusedPage = ({ contestData }: { contestData: ContestType[] }) => {
  const components = "stats contact footer";
  const [isFocusMode, setFocusMode] = useLocalStorage("focusMode", false);
  const [perPage, setPerPage] = useLocalStorage("perPage", "7");


  if (isFocusMode) {
    for (let component of components.split(" "))
      document.getElementById(component)?.classList.add("hidden");
  } else {
    for (let component of components.split(" "))
      document.getElementById(component)?.classList.remove("hidden");
  }

  useEffect(() => {
    setFocusMode(isFocusMode);
  }, [isFocusMode, perPage, setFocusMode]);

  return (
    <>
      <NavBar isFocusMode={isFocusMode} setFocusMode={setFocusMode} />
      {isFocusMode ? (
        <div className="container mx-auto px-1 py-4 md:p-4">
          <ContestsTable
            contestData={contestData}
            perPage={parseInt(perPage)}
            setPerPage={setPerPage}
          />
        </div>
      ) : (
        <div>
          <Hero />
          <CompressedContestTable
            contestData={contestData}
            perPage={parseInt(perPage)}
            setPerPage={setPerPage}
          />
        </div>
      )}
    </>
  );
};

function ClientOnly({ contestData }: { contestData: ContestType[] }) {
  return (
    <NoSSR>
      <FocusedPage contestData={contestData} />
    </NoSSR>
  );
}

export default ClientOnly;
