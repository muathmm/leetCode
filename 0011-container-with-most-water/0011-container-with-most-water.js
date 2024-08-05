/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let left = 0;
    let right = height.length - 1;
    let max_area = 0;

    while (left < right) {
        // Calculate the area with the current left and right pointers
        let current_area = Math.min(height[left], height[right]) * (right - left);
        // Update max_area if the current_area is larger
        max_area = Math.max(max_area, current_area);

        // Move the pointer that points to the shorter line
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return max_area;
    
};