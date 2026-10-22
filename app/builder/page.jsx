"use client";
import Link from "next/link";
import React from "react";

import EntriesTable from "../../components/EntriesTable";
import { useState, useEffect, useContext, useRef } from "react";
import Spinner from "../../components/Spinner";
import { IconFileDollar, IconPlus, IconMinus, IconDotsVertical, IconCircleCheck, IconX } from "@tabler/icons-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Head from "next/head";


import PageBuilder from '../../components/PageBuilder/PageBuilder';

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { useUtilsStore } from '../../store/useUtilsStore';


const page = () => {

	const { wrapCurrency, formatDate } = useUtilsStore()

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


	var [loading, setloading] = useState(false);

	const hasFetched = useRef(false);


	return (

		<PageBuilder />



	);
};

export default page;
