import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLocation } from "./../../../../actions/weather";
import { setFrom, setTo } from "./../../../../actions/money";
import country_list from "../../../../api/countries";
import { connect } from "react-redux";

const Select = ({
  userLocation,
  getLocation,
  setCurrency,
  second,
  setFrom,
  setTo,
}) => {
  const route = useLocation();
  const [selected, setSelected] = useState(147);
  const userCurrency = Object.keys(country_list).indexOf(userLocation.currency);
  const currencies = Object.keys(country_list);
  const selectedCountry = Object.values(country_list)[selected].toLowerCase();
  const [changed, setChanged] = useState(false);

  const options = () => {
    if (changed) {
      return Object.keys(country_list).map((item, idx) => (
        <option className="select-option" value={item} key={idx}>
          {item}
        </option>
      ));
    } else if (!changed && !second) {
      return (
        <option value={userLocation.currency ? useLocation.currency : "UAH"}>
          {userLocation.currency !== undefined ? userLocation.currency : "UAH"}
        </option>
      );
    } else {
      return <option value="USD">USD</option>;
    }
  };

  useEffect(() => {
    if (!second) {
      getLocation(route);
    }
  }, []);

  useEffect(() => {
    if (userCurrency > -1 && !second) {
      setSelected(userCurrency);
      setFrom(userLocation.currency);
    } else if (userCurrency === -1 && !second) {
      setSelected(147);
      setFrom("UAH");
    } else {
      setSelected(149);
      setTo("USD");
    }
  }, [userLocation]);

  const handleSelect = (e) => {
    setChanged(true);
    setSelected(currencies.indexOf(e.target.value));
    setCurrency(e.target.value);
  };

  return (
    <div className="select-box">
      <img
        src={`https://flagcdn.com/48x36/${selectedCountry}.png`}
        alt="flag"
      />
      <select
        className="select"
        onChange={(e) => handleSelect(e)}
        onClick={() => setChanged(true)}
      >
        {options()}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userLocation: state.money.data,
  };
};

const mapDispatchToProps = {
  getLocation,
  setFrom,
  setTo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
