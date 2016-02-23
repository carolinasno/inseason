![Alt text](/public/images/readme/inseason-logo.png)

### inseason

Make better eating habits with inseason.

---

### Development Approach

The ideation for inseason began with one goal in mind: to help people make better choices with the food they eat. The first step was to determine what information inseason would provide and how the user would use inseason in their everyday lives.

Because there aren't any APIs or databases that provide the information inseason needs, a JSON file with a list of produce and its details was created and imported into a Mongo database. For the Farmers Markets, the New York State Farmers Markets API was used to pull data and information on each farmers market. This includes the latitude, longitude, farmers markets name, location, hours of operation, season available, and contact number.

---

### User Stories

![User stories](/public/images/readme/whats-in-season.png)
![User stories](/public/images/readme/produce-list.png)

* As a user, I want to be able to see a list of fruits and vegetables, be able to click on an individual fruit or vegetable, and see its description. The description should include information of what season and months it is available.

![User stories](/public/images/readme/farmers-market.png)
![User stories](/public/images/readme/farmers-markets-map.png)

* As a user, I want to be able to see what farmers markets are in my city, be able to click on an individual farmers market by its marker and see information about that farmers market. The description should include the address, hours, season, and phone number.

![User stories](/public/images/readme/about.png)
![User stories](/public/images/readme/about-description.png)

* As a user, I want to learn more about inseason.

---

### URL

https://stayinseason.herokuapp.com

---

### Technologies

* NodeJS
* Express
* MongoDB
* JavaScript
* jQuery
* Angular
* Skeleton
* New York State's Farmers Markets API
* Google Maps API

---

### Version 2

inseason 2.0 would include a navigation bar, user accounts and profiles, a section for recipes, and there would be more fruits and vegetables added onto the produce list. Users would be able to add their favorite produce, famers markets, and recipes to their profile, search for recipes, as well as create their own recipes that can be shared amongst other users.
