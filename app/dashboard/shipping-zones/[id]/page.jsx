'use client'
import React, { use } from 'react'
import Link from "next/link";


import { useState, useEffect, } from "react";
import Image from "next/image";


import ToggleContent from "../../../../components/ToggleContent";
import { useCounterStore } from '../../../../store/useCounterStore'

import DropDown from '../../../../components/DropDown';

import ProductsPicker from "../../../../components/shop-elements/ProductsPicker";
import GalleryPicker from "../../../../components/shop-elements/GalleryPicker";
import TermsPicker from "../../../../components/shop-elements/TermsPicker";
import TagsPicker from "../../../../components/shop-elements/TagsPicker";
import Spinner from "../../../../components/Spinner";
import ShippingZoneEdit from "../../../../components/ShippingZoneEdit";

import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX, IconExternalLink } from "@tabler/icons-react";



const page = ({ params }) => {
  const { id } = use(params)

  return (
    <ShippingZoneEdit id={id} />
  )
}

export default page