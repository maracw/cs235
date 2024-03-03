import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        //Authorization : "Bearer GWJNb9wW4XNE",
        Authorization: 'Bearer jppn3cEF_iF7S-YbcaqTiiwskSKAsu-5Md-0g2n4jPyLdF1sp241rGUxLpCP9IQHkI9oQcQlYXleu8A-LJRfRpTH4cG5R_sJNRlBD9eQfS65EJq8dRzDKoXnCQrcZXYx'
    }
});