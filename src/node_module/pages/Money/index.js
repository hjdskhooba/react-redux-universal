import { useForm } from "react-hook-form";
import Layout from "../../containers/Layout";
import Select from "../../containers/components/Money/Select";
import { setTo, setFrom, setAmount, getResult } from "./../../actions/money";
import { connect } from "react-redux";
import { useState } from "react";

const Money = ({
  currency_form,
  getResult,
  setFrom,
  setTo,
  result,
  isDataInTransit,
  setAmount,
}) => {
  const [note, setNote] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let finalResult = result.toString().includes(".")
    ? result.toString().split(".")[0] +
      "." +
      result.toString().split(".")[1].slice(0, 6)
    : result;

  let resultString =
    result === 0 && !isDataInTransit
      ? 'Press the button or "enter" key'
      : result === 0 && isDataInTransit
      ? "Getting exchange rate..."
      : currency_form.amount +
        " " +
        currency_form.from +
        " = " +
        finalResult +
        " " +
        currency_form.to;

  const submitForm = () => {
    getResult(currency_form);
  };

  return (
    <Layout>
      <div className={note ? "notew show" : "notew"}>
        This information is relevant only for 2022.06.18
      </div>
      <div className="money">
        <div className="wrapper">
          <header>
            Currency Converter{" "}
            <small
              onMouseEnter={() => setNote(true)}
              onMouseLeave={() => setNote(false)}
              className="note"
            >
              !
            </small>
          </header>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="amount">
              <p>Enter Amount</p>
              <input
                type="number"
                value={currency_form.amount}
                onInput={(e) =>
                  e.target.value > 0 ? setAmount(e.target.value) : 1
                }
                {...register("amount", {
                  required: {
                    required: true,
                    message: "Enter amount",
                  },
                })}
              />
              <p>{errors.amount && errors.amount.message}</p>
            </div>
            <div className="drop-list">
              <div className="from">
                <p>From</p>
                <Select setCurrency={setFrom} second={false} />
              </div>
              <div className="icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="to">
                <p>To</p>
                <Select setCurrency={setTo} second={true} />
              </div>
            </div>
            <div className="exchange-rate">{resultString}</div>
            <button type="submit">Get Exchange Rate</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    currency_form: state.money.currency_data,
    result: state.money.result,
    isDataInTransit: state.money.isDataInTransit,
  };
};

const mapDispatchToProps = {
  getResult,
  setFrom,
  setTo,
  setAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Money);
