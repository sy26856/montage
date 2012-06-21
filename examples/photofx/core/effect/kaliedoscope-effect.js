/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2012 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */
var Montage = require("montage").Montage;
var Effect = require("core/effect/effect").Effect;

exports.KaliedoscopeEffect = Montage.create(Effect, {

    applyEffect: {
        value: function() {
            console.log("kaliedoscope")
        }
    }

});