import express from 'express';

export const ParameterizedRouter = (config) => {
  return express.Router({ mergeParams: true, ...config });
}