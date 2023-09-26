import React from "react";
import { Error } from "./Error";
import { CurrencyForm } from "./CurrencyForm";
import { Source } from "./Source";


const mockData = {
  "success": true,
  "timestamp": 1619432343,
  "base": "USD",
  "date": "2021-04-26",
  "rates": {
    "AED":3.67,
    "TRY":27.02,
    "GBP":0.81,
    "EUR":0.94,
    "USD":1,
    "ILS":3.82,
  }
};

export class DataController extends React.Component {
  static displayName = "DataController";
  state = {
    data: undefined,
    error: undefined,
    loading: false,
  };
  
  componentDidMount() {
    this.setState({ data: mockData });
    // this.loadData();
  }

  loadData = () => {
    const { url } = this.props;
    this.setState({ loading: true });
    fetch(url)
      .then(resp => resp.json())
      .then(
        (data) => {
          if (data.error) {
            this.setState({
              loading: false,
              error: data.error,
            });
          }
          else {
            this.setState({
              loading: false,
              data,
            });
          }
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      );
  }
  
  render() {
    const { url } = this.props;
    const { error, data } = this.state;

    if (error) {
      return <Error message={error.message || error.info} />;
    }

    if (!data?.base || !data?.rates) {
      return (<Error message="
      אין תוצאות להצגה אנא נסה שוב מאוחר יותר" />);
    }

    const { base, rates, date } = data;

    return (<>
      <CurrencyForm base={base} rates={rates} />
      <Source url={url} date={date} />
    </>);
  }
}

