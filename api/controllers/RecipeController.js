/**
 * RecipeController
 *
 * @description :: Server-side logic for managing recipes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


const Client = require('node-rest-client').Client;
const client = new Client();
const endpoint = "https://evening-lake-62189.herokuapp.com/recipes";

module.exports = {

  /**
   * `RecipeController.create()`
   */
  create: function(req, res) {

    if (req.method != "POST") {

      return res.view('create');

    } else {

      var args = {
        data: req.body,
        headers: {
          "Content-Type": "application/json"
        }
      };

      client.post(endpoint, args, function(data, response) {
        // return res.view('create', {success: { message: "Record added successfully"}});
        if (response.statusCode != "200") {
          req.addFlash("error", data.message.substring(data.message.indexOf("•")));
          return res.redirect('/create');
        }

        req.addFlash("success", "Record created successfully");
        return res.redirect('/create');

      })
    }

  },

  /**
   * `RecipeController.show()`
   */
  show: function(req, res) {
    client.get(`${endpoint}/${req.params.id}`, function(data, response) {
      return res.send(data)
    })
  },

  /**
   * `RecipeController.createInstruction()`
   */
  createInstruction: function(req, res) {

    if (req.method === "GET") {
      client.get(endpoint, function(data, response) {
        return res.view('createinstruction', {
          recipes: data
        });
      })
    }

    if (req.method === "POST") {

      var args = {
        data: req.body,
        headers: {
          "Content-Type": "application/json"
        }
      };

        client.post(`${endpoint}/${req.params.id}/instructions`, args, function (data, response) {
        // client.post(`${endpoint}/0/instructions`, args, function (data, response) {
            // return res.view('createInstruction', {success: { message: "Record added successfully"}});
            if(response.statusCode != "200"){
                req.addFlash("error", data.message.substring(data.message.indexOf("•")));
                return res.redirect('/createinstruction');
            }


        req.addFlash("success", "Record created successfully");
        return res.redirect('/createinstruction');

      })
    }
  },
  /**
   * `RecipeController.createIngredient()`
   */
  createIngredient: function (req, res) {

      if(req.method === "GET"){
        client.get(endpoint, function (data, response) {
          return res.view('createingredient', { recipes: data });
        })
      }

      if(req.method === "POST") {

        var args = {
            data: req.body,
            headers: { "Content-Type": "application/json" }
        };

        client.post(`${endpoint}/${req.params.id}/ingredients`, args, function (data, response) {
        // client.post(`${endpoint}/0/instructions`, args, function (data, response) {
            // return res.view('createInstruction', {success: { message: "Record added successfully"}});
            if(response.statusCode != "200"){
                req.addFlash("error", data.message.substring(data.message.indexOf("•")));
                return res.redirect('/createingredient');
            }

            req.addFlash("success", "Record created successfully");
            return res.redirect('/createingredient');

        })
      }
  },

  /**
   * `RecipeController.read()`
   */
  read: function(req, res) {

    client.get(endpoint, function(data, response) {
      return res.view('read', {
        recipes: data
      });
    }).on('error', function(err) {
      return res.view('read', {
        error: {
          message: "There was an error getting the recipes"
        }
      });
    });

  },

  /**
   * `RecipeController.readpassively()`
   */
  // readpassively: function (req, res) {
  //
  //   client.get(endpoint, function (data, response) {
  //       return res.send(data);
  //   }).on('error', function (err) {
  //       return res.send({error: { message: "There was an error getting the recipes"}});
  //   });
  //
  // },

  /**
   * `RecipeController.search()`
   */
  search: function(req, res) {

    client.get(endpoint, function(data, response) {
      return res.view('search', {
        recipes: data
      });
    }).on('error', function(err) {
      return res.view('search', {
        error: {
          message: "There was an error getting the recipes"
        }
      });
    });

  },

  /**
   * `RecipeController.update()`
   */
  update: function(req, res) {

    if (req.method != "POST") {

      client.get(endpoint, function(data, response) {
        return res.view('update', {
          recipes: data
        });
      }).on('error', function(err) {
        return res.view('update', {
          error: {
            message: "There was an error getting the recipes"
          }
        });
      });

    } else {

      var args = {
        data: req.body,
        headers: {
          "Content-Type": "application/json"
        }
      };

      client.put(endpoint + "/" + req.body.recipe_id, args, function(data, response) {

        if (response.statusCode != "200") {
          req.addFlash("error", data.message);
          return res.redirect('/update');
        }

        req.addFlash("success", "Record updated successfully");
        return res.redirect('/update');

      })

    }
  },

  /**
   * `RecipeController.delete()`
   */
  delete: function(req, res) {

    if (req.method != "POST") {

      client.get(endpoint, function(data, response) {
        return res.view('delete', {
          recipes: data
        });
      }).on('error', function(err) {
        return res.view('delete', {
          error: {
            message: "There was an error getting the recipes"
          }
        });
      });

    } else {

      client.delete(endpoint + "/" + req.body.recipe_id, function(data, response) {

        if (response.statusCode != "200") {
          req.addFlash("error", data.message);
          return res.redirect('/delete');
        }

        req.addFlash("success", "Record deleted successfully");
        return res.redirect('/delete');

      })
    }

  },


  /**
   * `RecipeController.deleteinstruction()`
   */
  deleteinstruction: function(req, res) {

    if (req.method === "GET") {
      client.get(endpoint, function(data, response) {
        return res.view('deleteinstruction', {
          recipes: data
        });
      })

    } else {
      client.delete(`${endpoint}/${req.params.id}/instructions/${req.params.ins_id}`, function(data, response) {

        if (response.statusCode != "200") {
          req.addFlash("error", data.message);
          return res.redirect('/deleteinstruction');
        }

        req.addFlash("success", "Record deleted successfully");
        return res.redirect('/deleteinstruction');

      })
    }

  },

  /**
   * `RecipeController.deleteinstruction()`
   */
  deleteingredient: function(req, res) {

    if (req.method === "GET") {
      client.get(endpoint, function(data, response) {
        return res.view('deleteingredient', {
          recipes: data
        });
      })

    } else {
      client.delete(`${endpoint}/${req.params.id}/ingredients/${req.params.ing_id}`, function(data, response) {

        if (response.statusCode != "200") {
          req.addFlash("error", data.message);
          return res.redirect('/deleteingredient');
        }

        req.addFlash("success", "Record deleted successfully");
        return res.redirect('/deleteingredient');

      })
    }

  }

};
