import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import NavItemUser from "./NavItemUser";
import { useSelector } from "react-redux";

function NavbarUser({ currentPage, code }) {
  const { hospitalInfo } = useSelector((state) => state.hospitalInfo);
  const { name, phone, image } = hospitalInfo;
  // const [hInfo, setHInfo] = useState("");
  // const fetchInfo = async () => {
  //   const GET_HOSPITAL_ID_BY_CODE = `http://i6a205.p.ssafy.io:8000/api/code/${code}`;
  //   const hId = await axios
  //     .post(GET_HOSPITAL_ID_BY_CODE)
  //     .then((res) => res.data);

  //   const GET_HOSPITAL_INFO_URL = `http://i6a205.p.ssafy.io:8000/api/id/${hId}`;
  //   const { name, phone, image } = await axios
  //     .post(GET_HOSPITAL_INFO_URL)
  //     .then((res) => res.data);
  //   setHInfo({ name, phone, image });
  // };

  // useEffect(() => {
  //   if (code) {
  //     fetchInfo();
  //   }
  // }, [code]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        {name && (
          <Link href={`/user/${code}`}>
            <a className="navbar-brand d-flex align-items-center gap-1 me-3">
              <Image
                className="navbar-logo "
                src={image}
                width="40px"
                height="30px"
                layout="fixed"
                priority
              ></Image>
              <div className="fs-3">{name}</div>
            </a>
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItemUser
              active={currentPage === `/user/[code]/survey/health`}
              url={`/user/${code}/survey/health`}
              title="????????????"
            />
            <NavItemUser
              active={currentPage === `/user/[code]/survey/service`}
              url={`/user/${code}/survey/service`}
              title="????????????"
            />
            <NavItemUser
              active={currentPage === `/user/[code]/notice`}
              url={`/user/${code}/notice`}
              title="????????????"
            />
            <NavItemUser
              active={currentPage === `/user/[code]/event`}
              url={`/user/${code}/event`}
              title="?????????"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;
