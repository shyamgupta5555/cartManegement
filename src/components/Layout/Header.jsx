import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Badge } from "@mui/material";
import Login from "../../pages/Login";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT,ALLREMOVE } from "../../actions/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const [price, setPrice] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastOpened, setToastOpened] = useState(false);
  const getdate = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const notify = () => toast.success("order success create", {
    theme: "colored"
  })
  const dOne = () => toast.success( `delete item successfully `, {
    theme: "colored"
  })

  const dlt = (id) => {
    dOne()
    dispatch(DLT(id));
  };
  

  const total = () => {
    let price = 0;
    getdate.map((ele, k) => {
      price = ele.price * ele.qty + price;
    });
    setPrice(price);
  };
  const navigate = useNavigate();

  const navg =()=>{
  navigate("/")

  }

  const checkout =  () => {
    notify()
    dispatch(ALLREMOVE())
  };
  useEffect(() => {
    total();
  }, [total]);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>login</NavLink>
        </li>
        <li>
          <Badge badgeContent={getdate.length} color="primary">
            <ShoppingCartIcon
              style={{ color: "white", fontSize: "2rem", cursor: "pointer" }}
            />
          </Badge>
        </li>
      </ul>
    </Box>
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Container>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                color={"goldenrod"}
                variant="h6"
                component="div"
                onClick={navg}
                sx={{ flexGrow: 1 }}
                style={{cursor:"pointer"}}
              >
                <FastfoodIcon />
                My Restaurant
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <ul className="navigation-menu">
                  <li>
                    <NavLink activeClassName="active" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"}>login</NavLink>
                  </li>
                  <li>
                    <Badge
                      badgeContent={getdate.length}
                      color="primary"
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <ShoppingCartIcon
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          cursor: "pointer",
                        }}
                      />
                    </Badge>
                  </li>
                </ul>
              </Box>
            </Toolbar>
          </Container>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {getdate.length ? (
              <div
                className="card_details"
                style={{ width: "24rem", padding: 10 }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdate.map((e) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </td>
                            <td>
                              <p>{e.rname}</p>
                              <p>Price : ₹{e.price}</p>
                              <p>Quantity : {e.qty}</p>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                 <ToastContainer />
                                <i className="fas fa-trash smalltrash"></i>
                              </p>
                            </td>

                            <td
                              className="mt-5"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <DeleteIcon />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <p className="text-center">Total :₹ {price}</p>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_details d-flex justify-content-center align-items-center"
                style={{ width: "24rem", padding: 10, position: "relative" }}
              >
                <i
                  className="fas fa-close smallclose"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                  }}
                ></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img
                  src=""
                  alt=""
                  className="emptycart_img"
                  style={{ width: "5rem", padding: 10 }}
                />
              </div>
            )}
            <h1>
              <Button variant="primary" className="col-lg-12" onClick={checkout}>
                create order
              </Button>
              <ToastContainer />
            </h1>
          </Menu>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
