import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from "../components/CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../actions/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {
  const [data, setData] = useState(Cardsdata);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [isToastShown, setIsToastShown] = useState(false);
  const dispatch = useDispatch();

  const notify = () => {
    if (!isToastShown) {
      toast.success("Item added successfully", {
        theme: "colored"
      });
      setIsToastShown(true);
    }
  };

  useEffect(() => {
    filterByName(search);
    setIsToastShown(false); // Reset toast shown flag when the search term changes
  }, [search]);

  const send = (e) => {
    notify();
    dispatch(ADD(e));
  }

  const filterByName = (searchTerm) => {
    const searchTermLower = searchTerm.toLowerCase();
    const filteredData = Cardsdata.filter((item) => {
      const rnameLower = item.rname.toLowerCase();
      return rnameLower.includes(searchTermLower);
    });
    setFilteredData(filteredData);
  };

  const displayedData = search ? filteredData : data;

  return (
    <Layout>
      <div className='container mt-3'>
        <h2 className='text-center'>
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Item Search............."
            style={{
              width: "50%",
              height: "3rem",
              fontSize: "2rem",
            }}
          />
        </h2>

        <div className="row d-flex justify-content-center align-items-center">
          {displayedData.map((element, id) => {
            return (
              <React.Fragment key={id}>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                      Price: ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button
                        variant="primary"
                        onClick={() => send(element)}
                        className='col-lg-12'
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Menu;