"use client";

import { createElement, forwardRef, Fragment } from "react";

const animationProps = new Set([
  "animate", "exit", "initial", "layout", "layoutId", "transition", "variants",
  "whileHover", "whileInView", "whileTap", "drag", "dragConstraints",
]);

const cache = new Map();

function motionElement(tag) {
  if (!cache.has(tag)) {
    cache.set(tag, forwardRef(function MotionElement(props, ref) {
      const cleanProps = {};
      Object.entries(props).forEach(([key, value]) => {
        if (!animationProps.has(key)) cleanProps[key] = value;
      });
      return createElement(tag, { ...cleanProps, ref }, props.children);
    }));
  }
  return cache.get(tag);
}

export const motion = new Proxy({}, { get: (_, tag) => motionElement(tag) });
export const AnimatePresence = ({ children }) => createElement(Fragment, null, children);
