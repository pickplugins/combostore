"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";


import BulkAddUsers from '../../../components/pages/BulkAddUsers';








const page = () => {












	return (


		<BulkAddUsers />



	);
};

export default page;
