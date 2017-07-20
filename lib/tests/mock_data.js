// Generated by CoffeeScript 1.12.6
(function() {
  var FIXTURE, SAMPLE_DATA, i, j, ref;

  SAMPLE_DATA = [536876032, 266, 220, 536876033, 251, 212, 536876034, 249, 198, 536876035, 250, 194, 536876036, 244, 188, 536876037, 190, 199, 536876038, 177, 215, 536876039, 236, 174, 536876040, 243, 182, 536941824, 226, 216, 536941825, 209, 229, 536941826, 182, 219, 536941827, 198, 209, 536941828, 202, 216, 536941829, 166, 194, 536941830, 185, 206, 536941831, 212, 159, 536941832, 212, 188, 537007616, 296, 212, 537007617, 299, 228, 537007618, 289, 207, 537007619, 273, 191, 537007620, 249, 197, 537007621, 239, 219, 537007622, 260, 208, 537007623, 258, 149, 537007624, 261, 156, 537073408, 244, 187, 537073409, 279, 185, 537073410, 309, 163, 537073411, 273, 166, 537073412, 285, 179, 537073413, 272, 229, 537073414, 270, 216, 537073415, 272, 133, 537073416, 299, 127, 537139200, 265, 183, 537139201, 251, 200, 537139202, 249, 206, 537139203, 251, 190, 537139204, 243, 180, 537139205, 190, 233, 537139206, 177, 227, 537139207, 236, 193, 537139208, 242, 160, 419430400, 238, 233, 419430401, 239, 239, 419430402, 238, 241, 419430403, 237, 237, 419430404, 237, 233, 419430405, 237, 228, 419430406, 239, 226, 419430407, 240, 231, 419496192, 228, 247, 419496193, 224, 250, 419496194, 222, 252, 419496195, 228, 245, 419496196, 236, 245, 419496197, 243, 245, 419496198, 246, 246, 419496199, 234, 247, 419561984, 296, 239, 419561985, 293, 239, 419561986, 292, 238, 419561987, 295, 238, 419561988, 297, 238, 419561989, 299, 238, 419561990, 298, 239, 419561991, 297, 239, 419627776, 226, 219, 419627777, 228, 219, 419627778, 227, 219, 419627779, 223, 219, 419627780, 219, 219, 419627781, 216, 219, 419627782, 214, 219, 419627783, 223, 219, 419693568, 238, 182, 419693569, 239, 182, 419693570, 238, 183, 419693571, 237, 185, 419693572, 237, 186, 419693573, 238, 183, 419693574, 239, 182, 419693575, 240, 180, 452986112, 226, 279, 452986113, 222, 272, 452986114, 225, 256, 452986115, 232, 251, 452986116, 233, 204, 452986117, 228, 266, 453051904, 215, 265, 453051905, 232, 262, 453051906, 232, 267, 453051907, 212, 271, 453051908, 230, 215, 453051909, 217, 255, 453117696, 269, 235, 453117697, 288, 227, 453117698, 300, 233, 453117699, 293, 233, 453117700, 293, 235, 453117701, 280, 236, 453183488, 227, 203, 453183489, 249, 181, 453183490, 261, 188, 453183491, 238, 215, 453183492, 225, 219, 453183493, 220, 216, 453249280, 226, 199, 453249281, 222, 180, 453249282, 225, 184, 453249283, 231, 180, 453249284, 234, 203, 453249285, 228, 195, 469764608, 234, 234, 469764609, 256, 244, 469764610, 281, 247, 469764611, 281, 230, 469764612, 263, 210, 469764613, 284, 199, 469764614, 296, 215, 469764615, 275, 238, 469764616, 251, 243, 469764617, 258, 236, 469764618, 261, 223, 469830400, 224, 247, 469830401, 235, 253, 469830402, 225, 282, 469830403, 213, 260, 469830404, 232, 232, 469830405, 254, 228, 469830406, 266, 227, 469830407, 247, 225, 469830408, 228, 226, 469830409, 225, 225, 469830410, 225, 220, 469896192, 296, 239, 469896193, 278, 229, 469896194, 272, 227, 469896195, 279, 231, 469896196, 302, 226, 469896197, 304, 221, 469896198, 294, 222, 469896199, 283, 221, 469896200, 282, 218, 469896201, 291, 218, 469896202, 296, 213, 469961984, 226, 219, 469961985, 263, 199, 469961986, 279, 192, 469961987, 250, 202, 469961988, 252, 200, 469961989, 248, 194, 469961990, 242, 184, 469961991, 196, 205, 469961992, 205, 211, 469961993, 220, 201, 469961994, 247, 187, 470027776, 234, 187, 470027777, 256, 161, 470027778, 281, 157, 470027779, 281, 149, 470027780, 263, 183, 470027781, 284, 191, 470027782, 296, 166, 470027783, 274, 157, 470027784, 251, 170, 470027785, 258, 178, 470027786, 261, 186, 520097542, 267, 228, 520163334, 246, 201, 520229126, 284, 207, 520294918, 217, 197, 520360710, 267, 178];

  FIXTURE = [];

  for (i = j = 0, ref = SAMPLE_DATA.length; j < ref; i = j += 3) {
    FIXTURE.push({
      id: SAMPLE_DATA[i],
      width: SAMPLE_DATA[i + 1],
      height: SAMPLE_DATA[i + 2]
    });
  }

  module.exports = FIXTURE;

}).call(this);