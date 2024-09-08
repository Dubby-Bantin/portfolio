"use client"; // This is a client component

import Giscus from "@giscus/react";

const GiscusComments = () => (
  <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-900 rounded-lg shadow-lg">
    <Giscus
      id="comments"
      repo="Dubby-Bantin/portfolio"
      repoId="R_kgDOMoKcRA"
      category="Announcements"
      categoryId="DIC_kwDOMoKcRM4CiH_W"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  </div>
);

export default GiscusComments;
