import "./App.css";
import "./components/Navigation";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MainPanel from "./components/MainPanel";
import RightPanel from "./components/RightPanel";
import React from "react";
import * as axios from 'axios'
 

function App() {
  const [Name, setName] = useState("");
  const [stockChartXValues, setstockChartXValues] = useState([]);
  const [stockChartYValues, setstockChartYValues] = useState([]);
  const [isRender, setisRender] = useState(false);
  const [predictedData, setPredictedData] = useState(0.0)
  const [StartDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 1))
  );
  const [todayHigh, settodayHigh] = useState();
  const [todayLow, settodayLow] = useState();
  const [marketCap, setmarketCap] = useState();
  const [volume, setvolume] = useState(0);
  const [para, setpara] = useState(<html></html>);
  let StartDate1 = StartDate;

  // useEffect( () =>{StartDate1=Date.parse(StartDate)/1000}, [StartDate]);
  //StartDate.setDate(StartDate.getFullYear()-1);
  //setStartDate(StartDate);

  //let StartDate=;
  //console.log(StartDate);
  function Rename(word) {
    //console.log("HI");
    setName(word);
    //console.log(Name);
  }
  let StockSymbol = Name.toLowerCase();
  let EndDate = Date.parse(new Date()) / 1000;
  function Duration(dd) {
    // let x=StartDate.getDate()
    // console.log(x);

    if (dd === 1) {
      // let x= StartDate.setDate(StartDate.getDate()-14);
      setStartDate(new Date(new Date().setDate(new Date().getDate() - 14)));
      setStartDate(new Date(new Date().setDate(new Date().getDate() - 14)));
      // console.log(x);
      //console.log(StartDate);
      //ApiGet()
    } else if (dd === 2) {
      setStartDate(new Date(new Date().setMonth(new Date().getMonth() - 1)));
      // let x= StartDate.setDate(StartDate.getMonth()-1);
      // setStartDate(x);
      //console.log(StartDate);
      //setStartDate(StartDate.getMonth()-1);
      //ApiGet()
    } else if (dd === 3) {
      setStartDate(new Date(new Date().setMonth(new Date().getMonth() - 6)));
      //console.log(StartDate);
      //setStartDate(StartDate.getMonth()-6);
      //ApiGet()
    } else {
      setStartDate(
        new Date(new Date().setFullYear(new Date().getFullYear() - 1))
      );
      console.log(StartDate);
      //ApiGet();
    }
    //sconsole.log(StartDate);
  }

  function getPara() {
    let API_Call = `https://api.coingecko.com/api/v3/coins/${Name}`;
    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setpara(json["description"]["en"]);
        //console.log(para);
      });
  }
  function handleClick(){
    //console.log('hi')
    // var namePredict = document.getElementById("name");
    // var entry = {
    //   namePredict: namePredict.value,
    // };
    // console.log(entry);
    // fetch(`http://localhost:5000/predict`, {
    //   method: "POST",
    //   credentials: "include",
    //   body: JSON.stringify({"name":Name}),
    //   cache: "no-cache",
    //   headers: new Headers({
    //     "content-type": "application/json",
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Access-Control-Allow-Origin': 'http://localhost:3000'

    //   }),
    // }).then(function (response) {
    //   if (response.status != 200) {
    //     console.log(`error!`);
    //     return;
    //   }
    //   response.text().then(function (data) {
    //     console.log(predictedData);
        
    //   });
    // });

  

    axios.post('http://localhost:5000/predict',{name:Name}).then(function (response) {
      if (response.status != 200) {
        console.log(`error!`);
        // document.getElementById("predict-visible").innerHTML = "Unavailable, try again!";
        // document.getElementById("predict-visible").style.visibility = "hidden";
        return;
      }
      
      setPredictedData(response.data[0][0])
      
      console.log(predictedData);
    })
   }

  function HighLow() {
    //console.log('hi');
    let tomorrow =
      Date.parse(new Date(new Date().setDate(new Date().getDate() - 1))) / 1000;
    let today = Date.parse(new Date()) / 1000;
    let API_Call = `https://api.coingecko.com/api/v3/coins/${Name}/market_chart/range?vs_currency=usd&from=${tomorrow}&to=${today}
    `;
    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let High = -1000000000,
          Low = 1000000000;

        for (var key in json["prices"]) {
          // console.log();
          if (json["prices"][key][1] > High) {
            //console.log(todayHigh);
            High = json["prices"][key][1];
          }
          if (json["prices"][key][1] < Low) {
            Low = json["prices"][key][1];
            //console.log(todayLow);
          }
        }
        settodayHigh(High);
        settodayLow(Low);
      });
  }

  useEffect(() => {
    StartDate1 = StartDate;
    //console.log(StartDate1);
  }, [StartDate1, StartDate]);
  //console.log(StartDate1);
  //useEffect(HighLow());

  function ApiGet() {
    setPredictedData(0)
    HighLow();
    getPara();
    //console.log(Name);

    setisRender(true);

    StartDate1 = Date.parse(StartDate1) / 1000;

    // StartDate=1607345619;
    // EndDate=1638881619;
    //console.log(StartDate);
    //console.log(EndDate);
    //console.log(StockSymbol);
    let API_Call = `https://api.coingecko.com/api/v3/coins/${StockSymbol}/market_chart/range?vs_currency=usd&from=${StartDate1}&to=${EndDate}
    `;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        var lastKey = Object.keys(json["prices"]).sort().reverse()[0];
        let cap, vol;

        for (var key in json["prices"]) {
          // console.log();
          stockChartXValuesFunction.push(
            new Date(json["prices"][key][0]).toLocaleDateString("en-US")
          );
          stockChartYValuesFunction.push(json["prices"][key][1]);
          cap = json["market_caps"][key][1];
          vol = json["total_volumes"][key][1];
        }
        setmarketCap(cap);
        setvolume(vol);
       // console.log(volume);

        // console.log(stockChartXValuesFunction);
        setstockChartXValues(stockChartXValuesFunction);
        setstockChartYValues(stockChartYValuesFunction);
        //console.log(stockChartYValues)
      });
  }
  return (
    <div>
      <Navigation ApiGet={ApiGet} Rename={Rename} />
      <div style={{ display: "flex", margin: "20px" }}>
        <div style={{ width: "65%" }}>
          <Overview para={para} />
        </div>
        <div style={{ width: "30%" }}>
          <RightPanel
            todayHigh={todayHigh}
            todayLow={todayLow}
            volume={volume}
            marketCap={marketCap}
          />
        </div>
      </div>
      <div style={{ display: "flex", margin: "20px" }}>
        <div style={{ width: "75%" }}>
          <MainPanel
            Xstock={stockChartXValues}
            Ystock={stockChartYValues}
            isRender={isRender}
            Duration={Duration}
            ApiGet={ApiGet}
          />
        </div>
        <div className="app__side">
          <div style={{ fontWeight: "900", fontSize: "30px" }}>Prediction</div>
          <Button style={{ margin: "10px 0px 0px 35px" }} variant="primary" onClick={()=>{handleClick()}}>
            Predict
          </Button>
          <div style={{ fontWeight: "900", fontSize: "30px" }}>${predictedData}</div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
