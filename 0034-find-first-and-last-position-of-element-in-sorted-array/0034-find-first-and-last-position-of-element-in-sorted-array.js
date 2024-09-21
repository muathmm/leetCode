/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let r = 0;
    let l = nums.length - 1;
    let arr = [-1, -1]; // افتراضيا إذا لم يتم العثور على العنصر

    // البحث عن الموقع الأول
    while (r <= l) {
        let mid = Math.floor((r + l) / 2);
        if (nums[mid] == target) {
            arr[0] = mid; // حفظ الموقع الأول
            l = mid - 1; // البحث عن المواضع السابقة لمواصلة البحث عن الأول
        } else if (nums[mid] < target) {
            r = mid + 1;
        } else {
            l = mid - 1;
        }
    }

    // إعادة تعيين حدود البحث للبحث عن آخر موقع
    r = 0;
    l = nums.length - 1;

    // البحث عن الموقع الأخير
    while (r <= l) {
        let mid = Math.floor((r + l) / 2);
        if (nums[mid] == target) {
            arr[1] = mid; // حفظ الموقع الأخير
            r = mid + 1; // البحث عن المواضع التالية لمواصلة البحث عن الأخير
        } else if (nums[mid] < target) {
            r = mid + 1;
        } else {
            l = mid - 1;
        }
    }

    return arr; // إعادة المواضع إذا وجدت، أو [-1, -1] إذا لم توجد
};
