import type { ComponentPropsWithoutRef } from "react";

export function Logo(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 88 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path d="M0 0h88v70H0V0z" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_129_133"
            transform="matrix(.0234 0 0 .02941 -.003 0)"
          />
        </pattern>
        <image
          id="image0_129_133"
          width={43}
          height={34}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAiCAYAAADGUiAIAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRUlEQVRYhcXYW4iVVRQH8N83UzZZRkqRQT3YdHkoSMZQioroRkH6UEjBl1EPBRk9pBERSbeXCro8NQVB1xMRRNJNtFISisqgoIsIUkFgTRcaSyebHE8P6xw4nZkz396f0/SH87K//9rrv9fee621T6EuGs05GEQ/vlMWeyr48zEfI8pibx2XRbZFOH0Aq3BUa3QfNmCdsviqg1vgeqzBGa3RA3gfa5TF5/+d2EbzBGzByT0Ye7FCWWxuCX0W1/XgjmOlsng91X262HC+FedWMH/DKbgV91RwxzCkLHakSOhLIbVwoWqhxLl8AXclcOfi7lQBh6QScVkG9/IM7hWpxJzIHp/BzcHRGs2BFGKO2J9qiqnCqLLYl0LMEbulppgqvJNKzBG7Ad/ma6nE06nEdLFlsR931lEzDTYqi02p5JzIUhav4KVcRT0wghtyDPLEBm7ExzXsOjGGq5TFDzlG+WLLYgzL8XW2bWAc1yiLD3INC41mTZ+OwUYMZdiMYSXeruOwzjFo4xdchPcS+SO4RE2h/FvsAFZjE7bhRZxdYT8qSmtV+vkES/BhBW8BHsZn2In1OL/9sX0MFrRELukyPoDb8ViFE7gFj+CwrvFnRBCqqtSgKDwndo03W/ZPtsW+jKunmWg1hhMED7UEn4Nv8CCeS7A7VkS9V588gaWFRvM47DL9+Z3AtWJRM42FojouruAN94lGueqi9aOBdQncHJwpIro4gTvYJy5JCvpwv7j9p9ZR1oE5uEMUl0WJNj/3ieS+M8PRBfgST+G0DDs4HDe1fD5k8mWcDq+1L9ilIv/1Zzpv4iO8KbZzu8inbQyIY3YWLhaVb16mD3gLyzsr2M14osZE3fgbe8RWHzED832B87C787IM474ZmPxQ8WicCaHbxdtvN5Nv9r1YK7b3/8anIqK72gNTpaFHRbPx+yyJmgrrxdP/187BXjnzVSwVq5tN/InbcCX+6P44XYLfIRqZtWYnym/gdDyuxzGsqkb7xbE4SXRDk1Y7A3hXbPkKFQ/S3OZ7nugRVmGZ+qX3R9FnPC/awSQczEthoSgmy0TSXyS6p26M43tR9bZhs+hvJ3IdHozYqTAXR7Z+f4m/QEdnavJ/AL+9tee2W5IaAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}
