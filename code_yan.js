const arr1 = [46, 55, 88, 0, 0, 0, 0];
const arr2 = [18, 29, 80, 90];

function merge(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    nums1.splice(m);

    while (j < n) {
        if (nums1[i] > nums2[j]) {
            if (i === 0) {
                nums1.unshift(nums2[j]);
                j++;
                i++;
            } else {
                nums1.splice(i, 0, nums2[j]);
                j++;
                i++;
            }
        } else {
            if (i === m + n - 1) {
                nums1.splice(i, 0, ...nums2.slice(j));
                break;
            }
            i++;
        }
    }
}

merge(arr1, 3, arr2, 4);

console.log(arr1, 'arr1');
