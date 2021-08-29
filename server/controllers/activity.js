const Activity = require('../models/Activity')

/**
 * API GET /activities
 * List all activities.
 */
exports.getActivities = (req, res, next) => {
  Activity.find((err, docs) => {
    if (err) return console.error(err)
    // console.log("inside activity collection" + docs)
    res.send({
      title: 'Activities',
      json: docs
    })
  })
}

/**
 * GET /activities/:num
 * List particular activity
 */
exports.getActivity = (req, res, next) => {
  //console.log(req.params.sl)
  Activity.find({ activity_num: req.params.num }, (err, docs) => {
    //console.log(docs)
    res.json(docs)
  })
}

/**
  * GET /editsloka/:sl
  * Edit sloka form


exports.editSlokaform = (req, res) => {
  Sloka.findById(req.params.sl, (err, docs) => {
    //console.log(docs)
    res.render('editsloka', { sloka: docs });
  });
};
*/
/**
  * POST /editsloka/:sl
  * submit form after editing sloka


exports.editSloka = (req,res,next) => {
  let sloka = req.body;
  Sloka.findByIdAndUpdate(req.params.sl, {$set: sloka}, {new: true}, (err, docs) => {
    //console.log(docs)
    if (err) { return next(err); }
    req.flash('info', { msg: 'Sloka has been edited.' });
    res.redirect('/slokas');
  });
};
*/
/**
 * POST /dellessons
 * Delete sloka.

exports.delSloka = (req, res, next) => {
  Sloka.remove({ _id: req.params.sl }, (err) => {
    if (err) { return next(err); }
    req.flash('info', { msg: 'Sloka has been deleted.' });
    res.redirect('/slokas');
  });
};
*/

/** POST /activity
 * Add activity to the db */

exports.addActivity = (req, res, next) => {
  let activity = new Activity(res.body)
  Activity.create(activity, (err, docs) => {
    if (err) return console.error(err)
    console.log('inside activity collection' + docs)
    res.redirect('/kriyanighantu')
  })
}

exports.addActivities = (req, res, next) => {
  let activities = [
    {
      activity_num: 5,
      name_sans: 'कन्दलनम्',
      meaning: 'bring forth or produce in abundance or simultaneously'
    },
    {
      activity_num: 6,
      name_sans: 'वृद्धिः',
      meaning: 'increment'
    },
    {
      activity_num: 7,
      name_sans: 'प्रकाशः',
      meaning: 'shine'
    },
    {
      activity_num: 8,
      name_sans: 'व्याख्यानम्',
      meaning: 'narrate'
    },
    {
      activity_num: 9,
      name_sans: 'प्रणयनम्',
      meaning: 'fix'
    }
  ]
  Activity.insertMany(activities, (err, docs) => {
    if (err) return console.error(err)
    console.log('inside activity collection' + docs)
    res.send({
      title: 'Activity added',
      json: docs
    })
  })
}
