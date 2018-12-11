import React, { Component } from 'react';
import SummaryCard from '../Summary/SummaryCard'
import '../Summary/SummaryCard.css'
import './Home.css'
import Layout from '../consistent/layout'
import { Route, Switch } from 'react-router-dom';
export default class Home extends Component{
    state = {
        user: [],
        hotels: [],
        hotelOptions: [],
        vacationRentalOptions: [],
        vacationRentals: [],
        flights: [],
        searchResult: [],
        reviews: []
    }
    getHotels(hotel)
    {
        this.setState({hotels:[]});
        this.setState({hotelOptions:[]});
        for(var i = 0; i<hotel.length;i++)
        {
            var a = (
                <SummaryCard
                key = {i}
                image = {hotel[i].image}
                name = {hotel[i].name}
                rating = {hotel[i].rating}
                reviews = {hotel[i].reviews}
                location = {hotel[i].location}
                />
            )
            this.setState({hotels: {...this.state.hotels, a}});
            this.state.hotelOptions.push(a);
        }
        
    }

    getVRentals(vRental)
    {
        this.setState({vacationRentalOptions:[]});
        for(var i = 0; i<vRental.length;i++)
        {
            var a = (
                <SummaryCard
                key = {i}
                image = {vRental[i].image}
                name = {vRental[i].name}
                rating = {vRental[i].rating}
                reviews = {vRental[i].reviews}
                location = {vRental[i].location}
                />
            )
            this.setState({vacationRentals: {...this.state.vacationRentals, a}});
            this.state.vacationRentalOptions.push(a);
        }
    
    }

    displayHotel(path)
    {
        fetch('/hotels?count=2')
            .then(res => res.json)
            .then((result =>
            {
                this.setState({searchResult:[]});
                for(var i = 0; i<result.length; i++)
                { 
                    this.setState({searchResult: {
                        ...this.state.searchResult,
                        image: result[i].image,
                        name: result[i].name,
                        rating: result[i].rating,
                        reviews: result[i].reviews,
                        location: result[i].location
                    }})
                }
                console.log(this.state.searchResult);
            }))
    }


    componentWillMount() {
        fetch('/hotels?count=5')
        .then(res => res.json())
        .then((result) => {
            this.getHotels(result);
        });
        fetch('/vRentals?count=5')
        .then(res => res.json())
        .then((result)=>{
            this.getVRentals(result);
        });
    }

    fetchAllHotels(){
        
    }
    render()
    {
        return (
            <div className="App">
                <Switch>
                    <Route path = "/" render = {() => <Layout />} />
                </Switch>
                <Switch>
                    <Route exact path = "/home" render = {()=>(
                        <div>
                            <div className = "heading">
                                <h1> Hotels: </h1>
                                <div id='hotelCards' className="Cards">
                                    {this.state.hotelOptions}
                                </div>
                            </div>
                            <div className = "heading">
                                <h1> Vacation Rentals: </h1>
                                <div id = 'vRentals' className="Cards">
                                    {this.state.vacationRentalOptions}
                                </div>
                            </div>
                        </div>
                    )}/>
                </Switch>
                <Switch>
                    <Route exact path = "/hotels" render = {() => 
                            <div className = "heading">
                                <h1> Hotels: </h1>
                                <div id='hotelCards' className="Cards">
                                    {this.state.hotelOptions}
                                </div>
                            </div>
                        }/>
                </Switch>
                <Switch>
                    <Route exact path = "/vRentals" render = {() =>
                        <div className = "heading">
                            <h1> VacationRentals </h1>
                            <div id = 'vRentalCards' className = "Cards">
                                {this.state.vacationRentalOptions}
                            </div>
                        </div>
                    } />
                </Switch>
                <Switch>
                    <Route exact path = "/h/name=Avari" render = {()=>
                            {
                               var temp;
                                for(var i = 0; i<this.state.hotelOptions.length; i++) 
                                {
                                    if(this.state.hotelOptions[i].props.name=="Avari")
                                    {
                                        temp = this.state.hotelOptions[i];
                                    }
                                };
                                return(
                                <div style = {{display: "grid"}}>
                                    {temp},
                                    <textarea style = {{maxwidth: 30 + "em", gridrow: 1, margin:10+ "px"}} />
                                    <button style = {{width: 10 + "em", gridrow: 1, gridColumn: 2, margin:10+ "px"}} onclick = {() => {
                                        
                                    }}>Submit</button>
                                </div>
                                );
                            
                            }
                        }
                    />
                </Switch>
            </div>
        );
    }

}