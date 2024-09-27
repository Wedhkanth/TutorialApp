module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: ' - find a place to work with wifi',
        pageHeader: {
            title: 'Teacher',
            strapline: ' places to get good knowledge'
        },
        //sidebar: "Looking for wifi and a seat? Foodzee helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Physics Wallah',
            address: 'Madhapur',
            rating: 5,
            facilities: ['JEE MAINS', 'JEE ADV', 'NEET'],
            distance: ''
        }, {
            name: 'Vedantu',
            address: 'pocharam',
            rating: 4,
            facilities: ['EAMCET', 'B.PHARM'],
            distance: ''
        }, {
            name: 'BYJUS',
            address: 'Athapur',
            rating: 2,
            facilities: ['NEET', 'BITSAT'],
            distance: ''
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};