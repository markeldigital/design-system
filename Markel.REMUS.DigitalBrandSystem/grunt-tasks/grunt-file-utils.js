var path = require('path');
var params = require('./params');
var root = params['projectRoot'];

var copyFile = function (grunt, sourcePath, destPath, subDirectory, filename) {
    var destinationFolder = subDirectory ? path.join(destPath, subDirectory) : destPath;
    var destinationPath = path.join(destinationFolder, filename);
    grunt.file.copy(sourcePath, destinationPath);
};

var copyDir = function (grunt, sourceDirPath, destDirPath) {
    grunt.file.recurse(sourceDirPath, function (absolutePath, rootDirectory, subDirectory, filename) {
        copyFile(grunt, absolutePath, destDirPath, subDirectory, filename);
    });
};

var  copyNuget = function (grunt, packageName, outputFolder) {
    var regex = new RegExp(packageName + "\" version=\"(.*)\" targetFramework=\"(.*)\"");
    var xml = grunt.file.read("packages.config");
    var versionsFound = regex.exec(xml);

    if (!versionsFound || !versionsFound.length) {
        grunt.fail.fatal("Could not get version for package [" + packageName + "], it was not found in packages.config");
    }

    var version = versionsFound[1];
    var designSystemPath = "../packages/" + packageName + "." + version;
    var sourceRoot = path.join(root, designSystemPath);
    var destination = path.join(root, outputFolder);

    copyDir(grunt, sourceRoot, destination);
};

module.exports = {
    copyDir: copyDir,
    copyNuget: copyNuget
}