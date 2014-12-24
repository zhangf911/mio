(function() {var implementors = {};
implementors['mio'] = ["<a class='stability Unstable' title='Unstable: just renamed as part of collections reform'></a>impl&lt;K: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a>&lt;K&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>&lt;S&gt;, V, S, H: <a class='trait' href='http://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html' title='core::hash::Hasher'>Hasher</a>&lt;S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K, V, H&gt;","<a class='stability Unstable' title='Unstable: just renamed as part of collections reform'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a>&lt;T&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a>&lt;S&gt;, S, H: <a class='trait' href='http://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html' title='core::hash::Hasher'>Hasher</a>&lt;S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, H&gt;","<a class='stability Unstable' title='Unstable: just renamed as part of collections reform'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/dlist/struct.DList.html' title='collections::dlist::DList'>DList</a>&lt;A&gt;","<a class='stability Unstable' title='Unstable: just renamed as part of collections reform'></a>impl&lt;E: <a class='trait' href='http://doc.rust-lang.org/nightly/collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;E&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","<a class='stability Unstable' title='Unstable: just renamed as part of collections reform'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/ring_buf/struct.RingBuf.html' title='collections::ring_buf::RingBuf'>RingBuf</a>&lt;A&gt;","<a class='stability Unstable' title='Unstable: just renamed as part of collections reform'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&lt;T&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt;","<a class='stability Unstable' title='Unstable: just renamed as part of collections reform'></a>impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.uint.html'>uint</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt;","<a class='stability Experimental' title='Experimental: waiting on Extend stability'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","<a class='stability Experimental' title='Experimental: waiting on Extend stabilization'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='http://doc.rust-lang.org/nightly/core/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","<a class='stability Experimental' title='Experimental: waiting on Extend stabilization'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
