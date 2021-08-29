const Vrittaratnakara = require('../models/Vrittaratnakara')

/**
 * API GET /lessons
 * List all lessons.
 */
exports.getLessons = (req, res, next) => {
  Vrittaratnakara.find((err, docs) => {
    if (err) return console.error(err)
    console.log('inside vrittaratnakara database' + docs)
    res.send({
      title: 'Lessons',
      json: docs
    })
  })
}

/**
 * GET /lesson/:sl
 * List lesson of id
 */
exports.getLesson = (req, res, next) => {
  //console.log(req.params.sl)
  Vrittaratnakara.find({ id: req.params.id }, (err, docs) => {
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

/** POST /lessons
 * Add Lesson */

exports.addLesson = (req, res, next) => {
  let lesson = req.body
  res.send(JSON.stringify(lesson))
  /*
  Vrittaratnakara.create(lesson, (err, docs) => {
    if (err) return console.error(err);
    console.log("inside vrittaratnakara database" + docs)
    res.send({
      title: "Lesson added",
      json: docs})
  });
*/
}
