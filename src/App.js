import React, {
  Component
} from 'react';
import SideBar from './components/sidebar';
import {
  ToastContainer
} from "react-toastr";
import _, {
  some
} from "lodash";
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

class App extends Component {
  state = {
    People: [{
        name: "Andrew Amernante",
        rating: 3,
        img: "http://www.fillmurray.com/200/200",
        Description: "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        Likes: ["Dogs", "Long walks on the beach", "Chopin", "Tacos"],
        Dislikes: ["Birds", "Red things", "Danish food", "Dead Batteries"]
      },
      {
        name: "Frank Wang",
        rating: 5,
        img: "http://www.fillmurray.com/200/201",
        Description: "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of anelizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
        Likes: ["Frank", "Manchester United", "Football", "Programming"],
        Dislikes: ["Dogs", "Long walks on the beach", "Chopin", "Tacos"]
      },
      {
        name: "Sissi Chen",
        rating: 5,
        img: "http://www.fillmurray.com/200/202",
        Description: "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of all life's problems.",
        Likes: ["Cats", "the beach", "Chopin", "Blue things"],
        Dislikes: ["Birds"]
      },
      {
        name: "Diego Garcia",
        rating: 2,
        img: "http://www.fillmurray.com/200/204",
        Description: "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go­cart, powered by my ownsense of self­satisfaction. You don't win friends with salad.",
        Likes: [
          "Talking Spanish",
          "Spanish food",
          "Spanish things",
          "Football"
        ],
        Dislikes: ["Not talking spanish", "Chopin"]
      },
      {
        name: "Fuad Rashid",
        rating: 4,
        img: "http://www.fillmurray.com/200/206",
        Description: "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        Likes: ["Dogs", "Long walks on the beach", "Chopin", "Tacos"],
        Dislikes: ["Birds", "Red things", "Danish food", "Dead Batteries"]
      }
    ]
  };

  Submit = (model) => {
    if (some(this.state.People, model)) {
      //console.log("duplicate");
      {
        this.refs.container.success( <
          strong > I am a strong title < /strong>, <
          em > I am an emphasized message < /em>
        );
      }
    } else {
      this.setState({
        People: [model, ...this.state.People]
      })
    }
  };
  Delete = ContactName => {
    const People = this.state.People.filter(c => c.name !== ContactName);
    this.setState({
      People
    });
  };

  componentDidUpdate =()=> {
    localStorage.setItem('state', JSON.stringify(this.state.People.name));
  };
  filterSearch = (query) => {

      //console.log(query.value.trim());
    const escapedValue = escapeRegexCharacters(query.value.trim());
    if(!query.value){
      console.log(query.value);
      this.setState({
      People: localStorage.getItem('state')
    })

    }
  
    
    const regex = new RegExp('^' + escapedValue, 'i');
    this.componentDidUpdate();
    
    const filterPeople = this.state.People.filter(c => regex.test(c.name));
    this.setState({
      People: filterPeople
    })
    
    





  };

  render() {
    return ( <
      React.Fragment >
      <
      SearchBar onSearch = {
        this.filterSearch
      }
      / >

      <
      main className = "container-fluid" >

      <
      ToastContainer ref = "container"
      className = "toast-top-right" / >
      <
      SideBar contact = {
        this.state.People
      }
      onSubmit = {
        this.Submit
      }
      onDelete = {
        this.Delete
      }
      /> </
      main >
      <
      / React.Fragment  >
    )
  }
}

export default App;