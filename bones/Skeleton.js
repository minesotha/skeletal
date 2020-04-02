
import Bone from "./BoneClass.js";

const bone1 = new Bone(
    "M13.062,66.062 C13.062,66.062 -10.054,77.480 9.062,86.062 C8.562,86.562 21.659,95.796 23.062,81.062 C25.562,54.812 83.812,26.812 104.062,18.062 C106.081,11.054 105.812,3.562 102.062,3.062 C98.312,2.562 99.562,-0.188 88.062,3.062 C89.062,3.812 87.062,11.062 87.062,11.062 L13.062,66.062 Z",
    "bone1", 229, 330);

const bone2 = new Bone("M4.125,1.500 L27.125,5.500 C27.125,5.500 21.375,26.000 32.125,44.500 C31.375,47.750 33.125,59.500 33.125,59.500 C33.125,59.500 67.375,136.500 70.125,140.500 C73.875,142.750 83.875,154.750 69.125,158.500 C55.125,163.250 62.625,152.250 62.125,151.500 C61.625,150.750 60.529,159.105 54.125,152.500 C50.644,148.910 58.875,142.500 60.125,143.500 C61.375,144.500 15.625,53.000 16.125,33.500 C-6.875,8.750 4.125,1.500 4.125,1.500 Z",
    "bone2", 227, 415);


const bone3 = new Bone("M52.344,2.094 C49.344,4.844 50.344,12.094 50.344,12.094 L2.344,59.094 C2.344,59.094 -0.911,65.094 5.344,65.094 C6.594,65.094 9.344,73.094 9.344,73.094 C9.344,73.094 18.094,70.594 17.344,63.094 C16.594,55.594 48.637,18.877 62.344,18.094 C71.094,17.594 66.344,8.094 66.344,8.094 L59.344,7.094 C59.344,7.094 55.344,-0.656 52.344,2.094 Z",
    "bone3", 229, 563);


const bone4 = new Bone("M36.562,9.594 C36.562,9.594 54.562,15.927 56.562,15.594 C58.562,15.261 59.562,13.594 59.562,13.594 C59.562,13.594 60.229,11.261 61.562,11.594 C62.895,11.927 57.895,0.261 62.562,1.594 C67.229,2.927 67.562,19.927 76.562,25.594 C85.562,31.261 97.229,32.927 99.562,33.594 C101.895,34.261 123.562,40.927 127.562,40.594 C131.562,40.261 144.562,62.594 144.562,62.594 C144.562,62.594 127.259,43.742 94.562,45.594 C90.162,45.843 93.562,50.594 93.562,50.594 C93.562,50.594 137.562,95.927 153.562,86.594 C152.229,86.594 157.562,79.594 157.562,79.594 C157.562,79.594 169.562,89.594 171.562,95.594 C173.562,101.594 180.229,105.594 178.562,111.594 C176.895,117.594 58.562,133.594 15.562,81.594 C-19.105,44.594 20.895,41.927 23.562,42.594 C26.229,43.261 32.562,33.594 32.562,33.594 L36.562,9.594 Z",
    "bone4", 135, 366);


const bone5 = new Bone("M28.469,79.906 C28.469,79.906 14.338,24.906 10.469,24.906 C6.600,24.906 -2.457,17.589 3.469,3.906 C4.844,-2.493 16.469,5.906 16.469,5.906 L15.469,12.906 C15.469,12.906 33.366,73.126 48.469,72.906 C51.738,72.003 53.469,73.906 53.469,73.906 C53.469,73.906 56.171,77.529 53.302,80.979 C54.895,82.572 51.787,86.182 49.469,86.906 C42.315,84.931 28.469,79.906 28.469,79.906 Z",
    "bone5", 145, 297);


const bone6 = new Bone("M3.062,2.937 C4.883,0.433 6.241,1.937 8.062,1.937 C11.476,-1.932 3.977,86.817 9.062,83.937 C8.379,80.523 11.062,6.937 11.062,6.937 L15.062,11.937 C15.062,11.937 11.793,89.661 9.062,91.937 C-0.952,92.165 1.241,5.441 3.062,2.937 Z",
    "bone6", 134, 304);

export default class Skeleton {
    constructor() {
        this.bones = [bone4, bone2, bone3, bone1, bone5, bone6]
    }
    getBones() {
        return this.bones;
    }
}