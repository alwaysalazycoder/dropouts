import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

import { states } from "../../data/stateData";
import { DropoutData } from "../../data/dropoutData";

import Dropdown from "../../components/dropdown/index";
import Card from "../../components/card/Card";
import LineChart from "../../components/chart/LineChart";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const DistrictWiseAnalysis = () => {
  // 🔥 states`
  const [state, setState] = useState("Select state");
  const [districts, setDistricts] = useState([]);
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [disableDropdown, setDisableDropdown] = useState(true);
  const [chartData, setChartData] = useState([]);

  // 🔥 Utility functions
  const getStates = () => {
    var arr = [];

    const handleClick = (item) => {
      updateDistricts(item);
      if (disableDropdown === true) {
        setDisableDropdown(false);
      }
    };
    states.forEach((item) => {
      arr.push(
        <div
          className="my-2 cursor-pointer hover:font-semibold "
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      );
    });

    return arr;
  };

  const updateDistricts = (stateValue) => {
    setChartData([]);
    setSelectedDistricts([]);
    setState(stateValue);
    var arr = [];
    DropoutData.map((obj) => {
      if (obj.state === stateValue) {
        obj.data.map((item) => {
          arr.push(item.name);
        });
      }
    });

    console.log(arr);
    setDistricts(arr);
  };

  const updateChartData = (arr) => {
    const resultantArr = [];

    arr.map((districtToBeShown) => {
      DropoutData.map((stateWiseData) => {
        if (stateWiseData.state === state) {
          stateWiseData.data.map((district) => {
            let obj = { name: "", data: [] };
            if (district.name === districtToBeShown) {
              obj.name = district.name;
              district.data.map((dropoutRate) => {
                obj.data.push(Object.values(dropoutRate)[0]);
              });

              resultantArr.push(obj);
            }
          });
        }
      });
    });

    console.log(resultantArr);
    setChartData(resultantArr);
  };

  const handleCheckboxClick = (e) => {
    console.log(selectedDistricts);
    let value = e.target.value;
    let index = selectedDistricts.indexOf(value);

    if (index !== -1) {
      let newArray = selectedDistricts.filter((item) => {
        return item != value;
      });
      updateChartData(newArray);
      setSelectedDistricts(newArray);
    } else {
      let newArray = [...selectedDistricts, value];
      setSelectedDistricts(newArray);
      updateChartData(newArray);
    }
  };

  const getDistricts = (data) => {
    var arr = [];

    data.forEach((item) => {
      arr.push(
        <div className="flex gap-2 bg-green-200 my-2">
          <input
            type="checkbox"
            value={item}
            className="cursor-pointer hover:font-semibold "
            onClick={(e) => handleCheckboxClick(e)}
          />
          {item}
        </div>
      );
    });

    return arr;
  };

  // 🔥 chart options
  const options = {
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: "#A3AED0",
      },
    },

    theme: {
      mode: "light",
    },
    chart: {
      type: "line",

      toolbar: {
        show: true,
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    colors: [
      "#FFBF00",
      "#DFFF00",
      "#CCCCFF",
      "#ff6384",
      "#ffcd56",
      "#36a2eb",

      "#db93ff",
    ],
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        rotate: 0,
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "datetime",
      range: undefined,
      categories: [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
    },

    yaxis: {
      show: true,
      // tickAmount: 12,
      // logBase: 10,
      // min: 0,
      // max: 120,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      forceNiceScale: true,
      floating: false,
      decimalsInFloat: 2,
    },
  };

  return (
    <div className="w-full bg-gray-100 h-[200vh]">
      <Navbar name={"State Dropout Trends by District"}/>



      <Card extra="flex flex-col  bg-white rounded-3xl py-6 px-2 text-center mx-4 mt-[50px]">
        <div className="">
        <div className=" flex justify-between h-fit p-4 rounded-xl mb-8 mx-4">
        <div className="flex gap-8">
          <Dropdown
            classNames={"top-12"}
            button={
              <div className="px-4 py-3 bg-gray-200 text-black flex justify-between items-center rounded-lg cursor-pointer w-fit">
                {" "}
                {state} <BiChevronDown className="w-6 h-6" />
              </div>
            }
            children={
              <div className="bg-white rounded-lg  text-left py-2 px-4 w-[200px] h-[30vh] overflow-y-scroll">
                {getStates()}
              </div>
            }
          />

          <Dropdown
            classNames={"top-12 "}
            button={
              <div className="shadow-lg px-4 py-3 bg-gray-200 text-black flex justify-between items-center rounded-lg cursor-pointer w-fit">
                {" "}
                {"Select Districts"} <BiChevronDown className="w-6 h-6" />
              </div>
            }
            children={
              <div className="bg-white rounded-lg py-2 px-4 w-[180px] h-[30vh] overflow-y-scroll flex flex-col ">
                {getDistricts(districts)}
              </div>
            }
            disable={disableDropdown}
          />
        </div>

        <button className="rounded-xl border-2 border-orange-500 px-3 py-2 text-base font-medium text-orange-500 transition duration-200 hover:bg-orange-500 hover:text-white active:bg-orange-700/5 dark:border-orange-400 dark:bg-orange-400/10 dark:text-white dark:hover:bg-orange-300/10 dark:active:bg-orange-200/10">
          Apply
        </button>
      </div>
        <div className="mb-auto flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold text-navy-700 dark:text-white">
            District Wise Trend Analysis
          </h2>
        </div>

        <div className="md:mt-16 lg:mt-0">
          <div className="h-[250px] w-full xl:h-[350px]">
            <LineChart series={chartData} options={options} />
          </div>
        </div>
        </div>

      </Card>
    </div>
  );
};

export default DistrictWiseAnalysis;
